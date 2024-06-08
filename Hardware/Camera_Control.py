from picamera2 import Picamera2
from flask import Flask, render_template, Response
from PIL import ImageDraw, Image, ImageFont
import mysql.connector
import pytz
import time
import cv2
import numpy as np
import datetime

app = Flask(__name__)
thresh = 80 #픽셀 차
max_diff = 5

picam2 = Picamera2()
video_config = picam2.create_video_configuration()
picam2.configure(video_config)
picam2.start()
font = ImageFont.truetype("fonts/SCDream6.otf", 20)
fourcc = cv2.VideoWriter_fourcc(*'XVID') # 영상 코덱

Maria_Config = {
    "user": "{ID}",
    "passwd": "{PASSWORD}",
    "host": "{RDS_HOST}",
    "database": "{DATABASE}",
    "port": "{PORT}"
}

def gen_frames():  
    flag = 0
    record_frame = 0
    goal = 225
    serial_number = 0
    while True:
        now = datetime.datetime.now()
        Datetime = now.strftime('%Y-%m-%d %H:%M:%S')
        rgb = picam2.capture_array()
        frame = cv2.cvtColor(rgb, cv2.COLOR_BGR2RGB) # cv2는 BGR 형태임

        frame = Image.fromarray(frame)
        draw = ImageDraw.Draw(frame)
        draw.text(xy = (10, 15), text=Datetime, font = font, fill=(255,255,255))
        frame = np.array(frame)
        frame2 = frame # frame2는 녹화용 frame은 송출용

        if flag == 0: # 녹화중이 아님
            a = picam2.capture_array()
            b = picam2.capture_array()
            c = picam2.capture_array()
            a_gray = cv2.cvtColor(a, cv2.COLOR_BGR2GRAY)
            b_gray = cv2.cvtColor(b, cv2.COLOR_BGR2GRAY)
            c_gray = cv2.cvtColor(c, cv2.COLOR_BGR2GRAY) # 3프레임으로 나눠서 동작 감지

            diff1 = cv2.absdiff(a_gray, b_gray) # a프레임과 b프레임을 비교
            diff2 = cv2.absdiff(b_gray, c_gray) # b프레임과 c프레임을 비교

            ret, diff1_t = cv2.threshold(diff1, thresh, 255, cv2.THRESH_BINARY)
            ret, diff2_t = cv2.threshold(diff2, thresh, 255, cv2.THRESH_BINARY) # 2진화

            diff = cv2.bitwise_and(diff1_t, diff2_t) # 비트 다른부분 and연산으로 찾음

            k = cv2.getStructuringElement(cv2.MORPH_CROSS, (3, 3)) # 불필요한 노이즈 제거
            diff = cv2.morphologyEx(diff, cv2.MORPH_OPEN, k)
            diff_cnt = cv2.countNonZero(diff) # 노이즈 제거 후 변경된 부분 카운팅
            if diff_cnt > max_diff:
                serial_number += 1
                insert_motion_event(serial_number)
                nowDatetime_path = now.strftime('%Y-%m-%d_%H_%M_%S') # 녹화파일 제목을 현재 시간으로 설정
                out = cv2.VideoWriter("./record/" + nowDatetime_path +'.avi', fourcc, 15.0, (frame2.shape[1],frame2.shape[0]))  # 녹화 시작
                print("detected")
                flag = 1 # 일종의 세마포어
        else: ## 녹화중
            record_frame += 1 # 목표프레임 1 증가
            out.write(frame2) # 영상에 삽입
            if record_frame >= goal: # goal프레임만큼 저장시 종료
                out.release()
                print("released")
                record_frame = 0
                flag = 0 # 다시 동작감지 활성화

        ref, buffer = cv2.imencode('.jpg', frame)   # 현재 영상을 그림파일형태로 바꿈
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # 그림파일들을 쌓아두고 호출을 기다림

def insert_motion_event(serial_number):
    try:
        connection = mysql.connector.connect(**Maria_Config)
        cursor = connection.cursor()
        now = datetime.datetime.now(pytz.timezone('Asia/Seoul'))
        cursor.execute("INSERT INTO MotionEvents (DetectionTime, SerialNumber) VALUES (%s, %s)", (now, serial_number))
        connection.commit()
    except mysql.connector.Error as err:
        print("Database error: {}".format(err))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/')
def index():
    return render_template('index5.html')             # index4#2.html의 형식대로 웹페이지를 보여줌

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame') # 그림파일들을 쌓아서 보여줌

@app.route('/screenshot')
def take_screenshot():
    frame = picam2.capture_array()  # 현재 카메라 프레임 캡처
    now = datetime.datetime.now()
    filename = f"screenshots/{now.strftime('%Y%m%d_%H%M%S')}.jpg"  # 파일명 생성
    cv2.imwrite(filename, frame)  # 이미지 파일 저장
    return {"status": "success", "filename": filename}  # 성공 응답 반환

if __name__ == "__main__":  # 웹사이트를 호스팅하여 접속자에게 보여주기 위한 부분
   app.run(host="0.0.0.0", port = "8282")
   # host는 현재 라즈베리파이의 내부 IP, port는 임의로 설정
   # 해당 내부 IP와 port를 포트포워딩 해두면 외부에서도 접속가능
