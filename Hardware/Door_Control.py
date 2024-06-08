from flask import Flask, request
import RPi.GPIO as GPIO
from time import sleep
import mysql.connector
from datetime import datetime

app = Flask(__name__)

Maria_Config = {
    "user": "{ID}",
    "passwd": "{PASSWORD}",
    "host": "{RDS_HOST}",
    "database": "{DATABASE}",
    "port": "{PORT}"
}

servoPin = 20 # 서보모터 GPIO 핀을 20으로 설정
SERVO_MAX_DUTY = 12
SERVO_MIN_DUTY = 3

sensor_pin = 16 # 문열림 센서 GPIO 핀을 16으로 설정
GPIO.setmode(GPIO.BCM)
GPIO.setup(servoPin, GPIO.OUT)
GPIO.setup(sensor_pin, GPIO.IN)

servo = GPIO.PWM(servoPin, 50)
servo.start(0)

def setServoPos(degree): # 서보모터의 최대 각도가 180도를 넘지 않게 함
    if degree > 180:
        degree = 180
    duty = SERVO_MIN_DUTY + (degree * (SERVO_MAX_DUTY - SERVO_MIN_DUTY) / 180.0)
    servo.ChangeDutyCycle(duty)

def checkDoorStatus(): # 문열림 상태 체크
    sensor_value = GPIO.input(sensor_pin)
    return "open" if sensor_value == GPIO.HIGH else "closed"

def insert_door_status(status):
    try:
        conn = mysql.connector.connect(**Maria_Config)
        cursor = conn.cursor()
        query = "INSERT INTO DoorStatus (status) VALUES (%s)"
        cursor.execute(query, (status,))
        conn.commit()
    except mysql.connector.Error as err:
        print("Error:", err)
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

@app.route('/control_motor', methods=['POST'])
def control_motor():
    data = request.json
    action = data.get('action')
    
    if action == 'open': # 앱 버튼 '열림' 누를 시 서보모터 180도로 작동
        setServoPos(180)
    elif action == 'close': # 앱 버튼 '닫힘' 누를 시 서보모터 180도로 작동
        setServoPos(0)
    else:
        return "Invalid action", 400
    
    sleep(1)
    servo.ChangeDutyCycle(0)
    
    door_status = checkDoorStatus()
    insert_door_status(door_status)
    
    return {"motor_action": action, "door_status": door_status}, 200

if __name__ == "__main__":
    try:
        app.run(host='0.0.0.0', port=6000)
    finally:
        servo.stop()
        GPIO.cleanup()
