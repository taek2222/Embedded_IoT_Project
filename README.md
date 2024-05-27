# 🏠 작은 집으로 IoT 체험 ✨

> 사물인터넷(IoT)의 기술을 간접적으로 체험할 수 있도록 제작한 작은 IoT 🔥

<p align="center">
  <img width="40%" alt="applogo" src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/507c5873-ffa6-40e8-8545-2d989ce4c511">
  <br><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/Spring%20Boot-Back-%6DB33F?style=for-the-badge&logo=springboot&logoSize=auto">
  <img alt="Static Badge" src="https://img.shields.io/badge/React%20Native-Front-%2361DAFB?style=for-the-badge&logo=React&logoSize=auto">
  <img alt="Static Badge" src="https://img.shields.io/badge/Raspberry%20Pi-Hardware-%23A22846?style=for-the-badge&logo=raspberrypi&logoSize=auto">

</p>

## 📖 프로젝트 소개
RoT 프로젝트는 무선 네트워크를 통해 하드웨어를 제어하고 데이터를 저장할 수 있는 시스템을 구축한 것입니다. <br><br>
이를 통해 다양한 기능을 원격으로 제어하고 실시간으로 모니터링할 수 있습니다. <br><br>
간단한 체험을 통해 실생활에서 사용되는 IoT 시스템을 간접적으로 경험할 수 있도록 설계되었습니다.

## 🧑‍🤝‍🧑 팀원 소개
|<img src="https://avatars.githubusercontent.com/u/118153233?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/135509685?v=4" width="150" height="150"/>|
|:-:|:-:|
|[@taek2222](https://github.com/taek2222)|[@reinwook](https://github.com/reinwook)|
|✔️ Back - Front|✔️ Hardware - Model|

## 📺 프로젝트 구성

### Application 📱
<table style="width:100%; text-align:center;">
  <thead>
    <tr>
      <th><strong>Main 화면</strong></th>
      <th><strong>평균 리포트 화면</strong></th>
    </tr>
  </thead>
  <tr>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/7c2f16b0-2c3a-4291-8ddc-3fdd726fb65b" alt="Main Application">
    </td>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/323e86bb-efcb-4059-aae8-c29e06587d7c" alt="application_cctv">
    </td>
  </tr>
    <thead>
      <tr>
        <th><strong>CCTV 화면</strong></th>
        <th><strong>Record 화면</strong></th>
      </tr>
    </thead>
  <tr>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/788f425a-55e4-489f-a8d2-32ff94ce0b71" alt="CCTV Application">
    </td>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/15ae760f-989e-4a55-a3dc-9313e3ff4aa9" alt="Record Application">
    </td>
  </tr>
</table>

### Model ⚙️
<table style="width:100%; text-align:center;">
  <thead>
    <tr>
      <th><strong>3D 모델링</strong></th>
      <th><strong>3D 모델링</strong></th>
      <th><strong>3D 모델</strong></th>
    </tr>
  </thead>
  <tr>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/268a4bd3-430d-4f6c-ad93-0ee019804ff7" alt="3D_1">
    </td>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/e31359db-acd6-439b-b2e0-4011c13c0d4b" alt="3D_2">
    </td>
    <td>
      <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/a33b6c10-ece3-41ce-8c7c-94afc44cf75a" alt="model">
    </td>
  </tr>
</table>

## 🔨 프로젝트 기능 
### LED ON / OFF 제어 🚨
 - **APP 통한 LED 조작** : 라즈베리파이에 연결된 LED를 ON/OFF 제어 기능.
 - **편의성 개선** : 전체 LED를 한 번에 ON/OFF 할 수 있는 기능을 제공하여 사용자의 편의성 향상.
 - **예외 처리** : 오류 발생 시 적절한 예외 처리를 통해 안정성을 보장.

### 환경 모니터링 📊
 - **다중 센서 활용** : 온습도 센서와 미세먼지 센서를 이용해 실시간 데이터 수집.
 - **데이터 검증** : 수집된 데이터 중 쓰레기 값이나 NULL 값은 제거 후, 나머지 유효 데이터를 데이터베이스로 전송.
 - **데이터 시각화** : 최신 데이터를 기반으로 온도, 습도, 미세먼지 수치를 모니터링하고, 일일 평균 데이터 리포트 제공.

### 문 제어 🚪
 - **문 개폐** : 사용자의 명령에 따라 모터를 이용하여 자동으로 문을 열거나 닫는 기능.
 - **안전 검증** : 마그네틱 도어 센서를 이용하여 문의 개폐 상태를 정확하게 감지하고 확인.

### 냉온풍기 제어 🎚️
 - **선풍기 모터 제어** : 선풍기 모형 모터를 이용하여 냉온풍기를 조작.
 - **세기 조절** : 사용자는 모터의 강도를 강, 중, 약으로 조절.

### 침입자 감지 📸
 - **실시간 감시 및 녹화** : 카메라 센서를 이용하여 실시간으로 감시를 수행하며, 움직임이 감지된 경우 해당 시간이후 15초 영상 저장.
 - **스크린샷 기능** : 현재 상태를 캡처하여 파일로 저장할 수 있는 기능을 제공.

### 출입 로그 기록 🗒️
 - **출입 로그 관리** : 문 개폐 시, 이중 검증을 통해 정확한 시간과 날짜에 로그를 기록하고 모니터링.

## ⚒️ 기술 스택
<p align="center">
  <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/b6bd133f-1aca-4683-aefa-7b81006abcb1" alt="Backend" style="width:70%; height:auto;">
  <img src="https://github.com/taek2222/Embedded_IoT_Project/assets/118153233/4367c78d-c049-4e0e-bebf-3cd3c8dcfc75" alt="Front-Hardware" style="width:70%; height:auto;">
</p>

## 🔗 시스템 구조도

