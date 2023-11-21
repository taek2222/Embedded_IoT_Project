import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Temperature() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch('http://localhost:8080/api/weather/temperature')
          .then(response => response.json())
          .then(data => {
            setWeatherData(data);
            console.log("새로운 데이터 온도", data);
            setTimeout(fetchWeatherData, 3000); // 3초 마다 예약
          })
    };

    fetchWeatherData();
  return () => clearTimeout(fetchWeatherData); // 컴포넌트 해제 시 타임아웃 정리
}, []);

const isDataLoaded = weatherData && weatherData != null && weatherData != null;

  return (
    <View>
      <Text style={styles.temperature_font}>실내 온도</Text>
      <View style={styles.temperature_border}>
        <Image
          source={require('../../assets/contents/temperature.png')}
          style={styles.temperature}
        />
        {isDataLoaded ? (<Text style={styles.temperature_value}>{weatherData}</Text>
        ) : (
          <Text>X</Text>
        )}
        <Text style={styles.temperature_value_unit}>°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  temperature_border: {
    // 온도 박스
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  temperature: {
    // 온도계 사진
    width: 70,
    height: 80,
    marginLeft: 5,
    marginTop: 33,
  },
  temperature_font: {
    marginTop: 7,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "bold",
  },
  temperature_value: {
    width: 45,
    height: 40,
    marginTop: 52,
    marginLeft: 2,
    fontSize: 35,
    fontWeight: "bold",
  },
  temperature_value_unit: {
    marginTop: 58,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});

export default Temperature;
