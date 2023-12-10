import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Modal_Title() { // 모달 상단 헤더 부분 스타일
  return (
    <View style = {styles.modal_title}>
      <Image
        source={require("/Users/ohyeontaek/Embedded_IoT_Project/Application/assets/header/home.png")}
        style={styles.modal_image}
      />
      <Text style={styles.modal_font}>Today Home</Text>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  modal_title: {
    flexDirection: "row",
    alignItems:"center"
  },
  modal_image: {
    width: 40,
    height: 40,
  },
  modal_font: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Modal_Title;
