import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";

function Bulb() {
  const [imageUri, setImageUri] = useState("/Users/ohyeontaek/embedded/embedded/assets/contents/light_off.png");

  // LED 전구
  const handlePress = async (action) => {
    try {
      const response = await fetch(
        `http://192.168.137.83:5000/led/${action}`,
        {
          method: 'POST',
        }
      );
      const data = await response.json();

      if(data === 200) {
        setImageUri("/Users/ohyeontaek/embedded/embedded/assets/contents/light_on.png"); // 전구 ON 이미지로 변경
      } else if(data === 100) {
        setImageUri("/Users/ohyeontaek/embedded/embedded/assets/contents/light_off.png"); // 전구 OFF 이미지로 변경
      } else {
        // 예상치 못한 상태 코드 처리
        console.error("Unexpected status code:", data);
      }
    } catch (error) {
      Alert.alert("Error", "Cannot communicate with the server");
    }
  };

  //Dust 미세먼지
  const dustPresss = async (action) => {
    try{
      const response = await fetch(
        `http://192.168.137.83:5000/dust/${action}`,
        {
          method: 'POST',
        }
      );
      const data = await response.json();
      if(data) {
        console.error(data);
      }

    } catch (error) {
      console.error(data);
    }
  };

  return (
    <View style={styles.light_border}>
      <View>
      <Image
          source={{ uri: imageUri }}
          style={styles.light}
        />
        <Text style={styles.light_font}>
          현재 : <Text style={{ color: imageUri === "/Users/ohyeontaek/embedded/embedded/assets/contents/light_on.png" ? "green" : "red" }}>
            {imageUri === "/Users/ohyeontaek/embedded/embedded/assets/contents/light_on.png" ? 'ON' : 'OFF'}
          </Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="LED ON" onPress={() => handlePress("on")} />
        <Button title="LED OFF" onPress={() => handlePress("off")} />
        <Button title="LED aFF" onPress={() => dustPresss("live")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  light_border: {
    // LED 박스
    width: 340,
    height: 150,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  light: {
    // LED 전등 사진
    width: 100,
    height: 100,
    marginLeft: 20,
    marginTop: 10,
  },
  light_font: {
    // LED 상태 글씨
    marginLeft: 33,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    marginLeft: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bulb;
