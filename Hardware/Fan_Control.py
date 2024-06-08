from flask import Flask, request
import RPi.GPIO as GPIO

app = Flask(__name__)

# 모터 설정
MOTOR_PIN = 13 # 모터의 GPIO핀을 13번으로 설정
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()  # GPIO 핀 초기화
GPIO.setup(MOTOR_PIN, GPIO.OUT, initial = GPIO.LOW)
pwm = GPIO.PWM(MOTOR_PIN, 100)

# 속도 설정
speeds = {
    "HIGH": 0,  # 70% 속도
    "MEDIUM": 20,  # 40% 속도
    "LOW": 40  # 20% 속도      
}

# 모터 정지 함수
def stop_motor():
    pwm.start(100)

# 모터 제어 함수
@app.route('/fan', methods=['POST'])
def control_fan():
    data = request.json
    speed = data.get('speed', 'MEDIUM').upper()
    is_on = data.get('is_on', True)

    if is_on:
        pwm.start(0)
        pwm.ChangeDutyCycle(speeds.get(speed, 60))  # 기본값 MEDIUM
    else:
        stop_motor()

    return {"status": "success", "speed": speed, "is_on": is_on}

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=7000, debug=True)
    finally:
        pwm.stop()
        GPIO.cleanup()  
