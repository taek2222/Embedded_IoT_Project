import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Hot_cold_fan() {
  const [selected, setSelected] = useState('중');

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
    marginTop: 7,
    marginLeft: 50,
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
});

export default Hot_cold_fan;
