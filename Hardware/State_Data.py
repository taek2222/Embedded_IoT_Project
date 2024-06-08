import mysql.connector
import Adafruit_DHT as dht
from datetime import datetime
import serial
from PMS7003 import PMS7003

class SensorDataHandler:
    def __init__(self, db_config, serial_port, baud_rate):
        # 초기화 메서드, 필요한 변수 및 객체 초기화
        self._humidity = None
        self._temperature = None
        self._fine_dust = None
        self.db = mysql.connector.connect(**db_config)
        self.cursor = self.db.cursor()
        self.serial_port = serial_port
        self.baud_rate = baud_rate
        self.dust_sensor = PMS7003()

    def read_sensor_data(self):
        # 센서에서 데이터를 읽고 변수에 저장
        h, t = dht.read_retry(dht.DHT11, 12)
        fine_dust_value = self.read_dust_sensor()
        
        # 읽어온 값이 None이 아니면 해당 값으로 업데이트
        if h is None:
            h = self._humidity
        else:
            self._humidity = h

        if t is None:
            t = self._temperature
        else:
            self._temperature = t

        if fine_dust_value is None:
            fine_dust_value = self._fine_dust
        else:
            self._fine_dust = fine_dust_value

        # 데이터베이스 업데이트
        self.update_database()

    def read_dust_sensor(self):
        # 미세먼지 센서에서 데이터를 읽어오는 메서드
        with serial.Serial(self.serial_port, self.baud_rate, timeout=1) as ser:
            buffer = ser.read(1024)
            if self.dust_sensor.protocol_chk(buffer):
                data = self.dust_sensor.unpack_data(buffer)
                return data[self.dust_sensor.DUST_PM10_0_ATM]
            else:
                return None

    def update_database(self):
        # 데이터베이스에 데이터를 업데이트하는 메서드
        query = "INSERT INTO weather_data (record_date, temperature, humidity, fine_dust) VALUES (%s, %s, %s, %s)"
        data = (datetime.now(), self._temperature, self._humidity, self._fine_dust)
        self.cursor.execute(query, data)
        self.db.commit()

    def close_connection(self):
        # 데이터베이스 연결을 닫는 메서드
        self.db.close()

# MariaDB 연결 정보
Maria_Config = {
    "user": "{ID}",
    "passwd": "{PASSWORD}",
    "host": "{RDS_HOST}",
    "database": "{DATABASE}",
    "port": "{PORT}"
}

# 시리얼 포트 및 속도 설정
SERIAL_PORT = '/dev/ttyUSB0'
Speed = 9600

# SensorDataHandler 객체 생성
data_handler = SensorDataHandler(Maria_Config, SERIAL_PORT, Speed)

try:
    # 무한 루프에서 센서 데이터를 읽어오고 데이터베이스에 업데이트
    while True:
        data_handler.read_sensor_data()
finally:
    # 프로그램이 종료되면 데이터베이스 연결을 닫음
    data_handler.close_connection()
