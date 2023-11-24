import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Modal_Title() {
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

const styles = StyleSheet.create({
  modal_title: {
    flexDirection: "row",
    alignItems:"center"
  },
  modal_image: {
    // 문 사진
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
