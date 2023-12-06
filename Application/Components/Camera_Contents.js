import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import Header from "./header.js";

function CameraScreen() {
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
      <View style={style.Box_Boder}></View>
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
    height: 250,
    marginTop: 4,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 30,
    padding: 10,
  },
});

export default CameraScreen;
