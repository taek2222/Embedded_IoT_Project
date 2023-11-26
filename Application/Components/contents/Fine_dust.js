import React from "react";
import { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Fine_dust() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch('http://localhost:8080/api/weather/fine_dust')
          .then(response => response.json())
          .then(data => {
            setWeatherData(data);
            console.log("새로운 데이터 미세먼지", data);
            setTimeout(fetchWeatherData, 3000); // 3초 마다 예약
          })
    };

    fetchWeatherData();
  return () => clearTimeout(fetchWeatherData); // 컴포넌트 해제 시 타임아웃 정리
}, []);

const isDataLoaded = weatherData && weatherData != null && weatherData != null;

  return (
    <View>
      <Text style={styles.fine_dust_font}>실내 미세먼지</Text>
      <View style={styles.fine_dust_border}>
        <Image
          source={require('../../assets/contents/fine_dust.png')}
          style={styles.fine_dust}
        />
        {isDataLoaded ? (<Text style={styles.fine_dust_value}>{weatherData}</Text>
        ) : (
          <Text>X</Text>
        )}
        <Text style={styles.fine_dust_value_unit}>㎛</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  fine_dust_border: {
    // 미세먼지 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  fine_dust: {
    // 미세먼지 사진
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 42,
  },
  fine_dust_font: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 17,
    fontWeight: "bold",
  },
  fine_dust_value: {
    width: 45,
    height: 40,
    marginTop: 52,
    marginLeft: 12,
    fontSize: 35,
    fontWeight: "bold"
  },
  fine_dust_value_unit: {
    marginTop: 67,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray"
  }
});

export default Fine_dust;
