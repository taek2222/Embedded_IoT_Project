import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Humid() {

  const [dustData, setDustData] = useState(null);

  // 미세먼지 데이터를 불러오는 함수
  const fetchDustData = async () => {
    try {
      const response = await fetch('http://192.168.137.34:5000/dh11/humid', {
        method: 'POST',
      });
      const data = await response.json();
      setDustData(data);
      console.error(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    // 컴포넌트 마운트 시 및 5초마다 미세먼지 데이터 갱신
    useEffect(() => {
      fetchDustData(); // 처음 마운트될 때 데이터 불러오기
      const interval = setInt
      
  
      // 컴포넌트 언마운트 시 인터벌 정리
      return () => clearInterval(interval);
    }, []);

  return (
    <View>
      <Text style={styles.humidity_font}>실내 습도</Text>
      <View style={styles.humidity_border}>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/humidity.png",
          }}
          style={styles.humidity}
        />
        <Text style={styles.temperature_value}>{dustData}</Text>
        <Text style={styles.temperature_value_unit}>°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  humidity_border: {
    // 온도 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  humidity: {
    // 온도계 사진
    width: 70,
    height: 80,
    marginLeft: 5,
    marginTop: 33,
  },
  humidity_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
  humidity_value: {
    width: 45,
    height: 40,
    marginTop: 52,
    marginLeft: 2,
    fontSize: 35,
    fontWeight: "bold",
  },
  humidity_value_unit: {
    marginTop: 58,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});

export default Humid;
