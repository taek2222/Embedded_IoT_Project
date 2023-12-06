import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Hot_cold_fan() {
  const [selected, setSelected] = useState('중');
  const [isOn, setIsOn] = useState(false);

  // 서버와 통신하는 함수
  const controlFan = async (powerState) => {
    const speedMap = { "상": "HIGH", "중": "MEDIUM", "하": "LOW" };
    const speed = speedMap[selected];
    const is_on = powerState;

    try {
      const response = await fetch('http://172.20.10.3:7000/fan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ speed, is_on }),
      });

      const jsonResponse = await response.json();
      console.log('Server Response:', jsonResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const Checkbox = ({ label, value }) => (
    <TouchableOpacity
      style={styles.checkboxItem}
      onPress={() => setSelected(value)}>
      <View style={selected === value ? styles.checkboxChecked : styles.checkboxUnchecked} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.hc_fan_font}>냉온풍기</Text>
      <View style={styles.hc_fan_border}>
        <Image
          source={require("../../assets/contents/fan.png")}
          style={styles.hc_fan}
        />
        <View style={styles.hc_fan_power}>
          <Text style={styles.hc_fan_power_font}>바람 세기</Text>
          <View style={styles.checkboxItem}>
            <Checkbox label="상" value="상" />
            <Checkbox label="중" value="중" />
            <Checkbox label="하" value="하" />
          </View>
          <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsOn(true);
            controlFan(true);
          }}>
          <Text style={styles.buttonText}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsOn(false);
            controlFan(false);
          }}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
      </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hc_fan_border: {
    // 냉온풍기 박스
    width: 340,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  hc_fan: {
    // 냉온풍기 사진
    width: 110,
    height: 110,
    marginLeft: 25,
    marginTop: 20,
  },
  hc_fan_font: {
    marginTop: 10,
    marginLeft: 142,
    fontSize: 17,
    fontWeight: "bold",
  },
  hc_fan_power: {
    width: 200,
    marginTop: 20,
    alignItems: "center"
  },
  hc_fan_power_font: {
    fontSize: 19,
    fontWeight: "bold"
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  checkboxUnchecked: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#000',
  },
  buttonsContainer: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Hot_cold_fan;
