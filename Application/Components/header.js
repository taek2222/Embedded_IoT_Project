import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";

function header() {
  const rotateAnim = new Animated.Value(0);

  const startRotation = () => {
    rotateAnim.setValue(0);

    // 애니메이션 실행
    Animated.timing(rotateAnim, {
      toValue: 1, // 최종 값 1
      duration: 1000, // 1초 동안
      useNativeDriver: true, // 네이티브 드라이버 사용
    }).start();
  };

  // 회전 값 인터폴레이션
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1], // 입력 범위는 0에서 1
    outputRange: ["0deg", "360deg"], // 출력 범위는 0도에서 360도
  });

  // 애니메이션 스타일
  const rotationStyles = {
    transform: [{ rotate }],
  };
  // 배너
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={startRotation}>
          <Animated.Image
            source={require('../assets/header/refreash.png')}
            style={[{ width: 40, height: 40, marginLeft: 5 }, rotationStyles]}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/header/applogo.png')}
          style={{ width: 100, height: 40, marginLeft: 10 }}
        />
        <Image
          source={require('../assets/header/option.png')}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View
        style={styles.underbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
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
    width: 350
  },
});

export default header;
