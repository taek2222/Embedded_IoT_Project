import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";
import Header from "./header.js";

function CameraScreen() {
  // 카메라 내비게이션 화면 부분
  const [motionEvents, setMotionEvents] = useState([]);
  const webviewRef = useRef(); // WebView 참조를 위한 ref

  useEffect(() => {
    // 침입자 감지 리스트 데이터 요청
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://172.20.10.2:8080/api/motionevents"
        );
        const json = await response.json();
        setMotionEvents(json);
      } catch (error) {}
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const takeScreenshot = () => {
    // 스크린샷 서버 통신 요청
    fetch("http://172.20.10.4:8282/screenshot")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Alert.alert(
          "📸 스크린샷 촬영 성공 📸",
          "스크린샷이 성공적으로 촬영되었습니다."
        );
      })
      .catch((error) => {
        console.error("스크린샷 요청 오류", error);
        Alert.alert("오류 발생", "스크린샷 촬영에 실패했습니다.");
      });
  };

  const renderItem = ({ item }) => {
    // 날짜 형식 변경
    const formattedDate = formatDate(new Date(item.detectionTime));

    return (
      <View style={style.listItem}>
        <Text style={style.listItemText}>🚫 감지 시간: {formattedDate}</Text>
      </View>
    );
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return `[ ${year} / ${month} / ${day} - ${hours}:${minutes}:${seconds} ]`;
  };

  return (
    <View style={style.Screen}>
      <Header />
      <View style={{ height: 250 }} ref={webviewRef}>
        <WebView
          source={{ uri: "http://172.20.10.4:8282/video_feed" }}
          style={style.WebViewStyle}
        />
      </View>
      <Image
        source={require("../assets/contents/camera.png")}
        style={style.camera_main}
      />
      <View style={style.Box_Boder}>
        <FlatList
          data={motionEvents}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <TouchableOpacity onPress={takeScreenshot}>
        <Image
          source={require("../assets/contents/screenshot.png")}
          style={style.screenshot}
        />
      </TouchableOpacity>
    </View>
  );
}

// 스타일 정의
const style = StyleSheet.create({
  camera_main: {
    width: 210,
    height: 60,
  },
  Screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  WebViewStyle: {
    width: 400,
    marginTop: 20,
  },
  Box_Boder: {
    width: 340,
    height: 230,
    marginTop: 4,
    marginBottom: 16,
    borderWidth: 3,
    borderRadius: 30,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
  },
  listItemText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  screenshot: {
    width: 100,
    height: 80,
    marginBottom: 30,
  },
});

export default CameraScreen;
