import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Avg_Fine_dust() { // 평균 값 데이터 표시
  const [averageFine_dust, setAverageFine_dust] = useState(null);

  useEffect(() => {
    // 서버로부터 평균 미세먼지 데이터를 가져옵니다.
    fetch('http://172.20.10.2:8080/api/weather/average/fine_dust')
      .then(response => response.json())
      .then(data => setAverageFine_dust(data))
      .catch(error => console.error('Error:', error));
  }, []);


  return ( // 표시 데이터 화면
    <View style={styles.Fine_dust_border}>
      <Image
        source={require("../../assets/contents/fine_dust.png")}
        style={styles.Fine_dust_image}
      />
      <Text style={styles.Fine_dust_font}>미세먼지 :     {averageFine_dust}  ㎛</Text>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  Fine_dust_border: {
    width: 280,
    height: 80,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  Fine_dust_image: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  Fine_dust_font: {
    // 평균 미세먼지 폰트
    marginLeft: 9,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Avg_Fine_dust;
