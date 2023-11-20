import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Humid() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/weather/latest')
        .then(response => response.json())
        .then(data => {
            setWeatherData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}, []);

const isDataLoaded = weatherData && weatherData.temperature != null && weatherData.humidity != null;

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
        {isDataLoaded ? (<Text style={styles.humidity_value}>{weatherData.humidity}</Text>
        ) : (
          <Text>X</Text>
        )}
        
        <Text style={styles.humidity_value_unit}>%</Text>
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
