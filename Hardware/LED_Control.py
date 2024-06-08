import serial
import RPi.GPIO as GPIO

from flask import Flask 

app = Flask(__name__)

LED_PINS = [17, 27, 23] # LED 각각의 GPIO 핀 설정

GPIO.setmode(GPIO.BCM) # GPIO BCM 모드로 설정
for pin in LED_PINS:
    GPIO.setup(pin, GPIO.OUT) # 각 핀을 출력 모드로 설정

@app.route('/led/<int:led_id>/on', methods=['POST']) # LED ON 제어
def led_on(led_id): 
    if led_id in LED_PINS: 
        GPIO.output(led_id, GPIO.HIGH) # HIGH 변경으로 LED ON
        return "200" # ON의 성공 반환값

@app.route('/led/<int:led_id>/off', methods=['POST']) # LED OFF 제어
def led_off(led_id):
    if led_id in LED_PINS:
        GPIO.output(led_id, GPIO.LOW) # LOW 변경으로 LED OFF
        return "100" # OFF의 성공 반환값
        
@app.route('/led/all/on', methods=['POST']) # LED ALL ON 제어
def all_leds_on():
    for pin in LED_PINS: # 반복분으로 ALL ON
        GPIO.output(pin, GPIO.HIGH) # HIGH 변경으로 LED ON
    return "200" # ON의 성공 반환값

@app.route('/led/all/off', methods=['POST']) # LED ALL OFF 제어
def all_leds_off():
    for pin in LED_PINS: # 반복분으로 ALL OFF
        GPIO.output(pin, GPIO.LOW) # LOW 변경으로 LED ON
    return "100" # OFF의 성공 반환값
        
if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000) # 호스트는 라즈베리파이 IP, PORT : 5000
    except KeyboardInterrupt:
        GPIO.cleanup()