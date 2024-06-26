import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Humid() {  // 습도 데이터 표시 및 통신
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => { // Spring boot 서버 통신
    const fetchWeatherData = () => {
      fetch('http://172.20.10.2:8080/api/weather/humid')
          .then(response => response.json())
          .then(data => {
            setWeatherData(data);
            console.log("[데이터] 습도", data);
            setTimeout(fetchWeatherData, 3000); // 3초 마다 예약
          })
    };

    fetchWeatherData();
  return () => clearTimeout(fetchWeatherData); // 컴포넌트 해제 시 타임아웃 정리
}, []);

const isDataLoaded = weatherData && weatherData != null && weatherData != null;

  return (
    <View>
      <Text style={styles.humidity_font}>실내 습도</Text>
      <View style={styles.humidity_border}>
        <Image
          source={require('../../assets/contents/humidity.png')}
          style={styles.humidity}
        />
        {isDataLoaded ? (<Text style={styles.humidity_value}>{weatherData}</Text>
        ) : (
          <Text style={styles.humidity_value}>X</Text>
        )}
        
        <Text style={styles.humidity_value_unit}>%</Text>
      </View> 
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  humidity_border: {
    width: 160,
    height: 150,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
  },
  humidity: {
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
