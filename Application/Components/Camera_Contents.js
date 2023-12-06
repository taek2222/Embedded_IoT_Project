import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Header from "./header.js";

function CameraScreen() {
  const [motionEvents, setMotionEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://172.20.10.2:8080/api/motionevents"
        );
        const json = await response.json();
        setMotionEvents(json);
      } catch (error) {
        // 에러 처리
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
      <View style={{ height: 250 }}>
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
      <Image
        source={require("../assets/contents/screenshot.png")}
        style={style.screenshot}
      />
    </View>
  );
}

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
    marginBottom: 30
  },
});

export default CameraScreen;
