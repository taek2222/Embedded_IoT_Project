import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import Modal from "./Modal.js";

function header() {
  const [modalVisible, setModalVisible] = useState(false);

  const rotateAnim = new Animated.Value(0);

  const startRotation = () => {
    rotateAnim.setValue(0);

    // 애니메이션
    Animated.timing(rotateAnim, {
      toValue: 1, 
      duration: 1000,
      useNativeDriver: true, 
    }).start();
  };

  // 회전 값 인터폴레이션
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  // 애니메이션 스타일
  const rotationStyles = {
    transform: [{ rotate }],
  };

  return ( // 상단 헤더 부분 화면
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={startRotation}>
          <Animated.Image
            source={require("../assets/header/refreash.png")}
            style={[{ width: 40, height: 40, marginLeft: 5 }, rotationStyles]}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/header/applogo.png")}
          style={{ width: 100, height: 40, marginLeft: 10 }}
        />
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              source={require("../assets/header/report.png")}
              style={{ width: 45, height: 45 }}
            />
          </TouchableOpacity>
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </View>
      <View style={styles.underbar} />
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  underbar: {
    marginTop: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#61677A",
    width: 350,
  },
});

export default header;
