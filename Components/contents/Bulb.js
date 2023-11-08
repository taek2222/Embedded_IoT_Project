import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";

function Bulb() {
  // LED
  const handlePress = async (action) => {
    try {
      const response = await fetch(
        `http://<FLASK_SERVER_IP>:5000/led/${action}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      Alert.alert(data.status);
    } catch (error) {
      Alert.alert("Error", "Cannot communicate with the server");
    }
  };
  return (
    <View style={styles.light_border}>
      <View>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/light_on.png",
          }}
          style={styles.light}
        />
        <Text style={styles.light_font}>
          현재 : <Text style={{ color: "green" }}>ON</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="LED ON" onPress={() => handlePress("on")} />
        <Button title="LED OFF" onPress={() => handlePress("off")} />
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
