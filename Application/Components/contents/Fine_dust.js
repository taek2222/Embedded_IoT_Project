import React from "react";
import { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Fine_dust() {

  const [dustData, setDustData] = useState(null);

    // 미세먼지 데이터를 불러오는 함수
    const fetchDustData = async () => {
      try {
        const response = await fetch('http://192.168.137.34:5000/dust/live', {
          method: 'POST',
        });
        const data = await response.json();
        setDustData(data.pm10_0);
        console.log('서버로 전달 받은 미세먼지 데이터 : ', data.pm10_0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // 컴포넌트 마운트 시 및 5초마다 미세먼지 데이터 갱신
    useEffect(() => {
      fetchDustData(); // 처음 마운트될 때 데이터 불러오기
      const interval = setInterval(fetchDustData, 5000); // 5초마다 반복
  
      // 컴포넌트 언마운트 시 인터벌 정리
      return () => clearInterval(interval);
    }, []);

  return (
    <View>
      <Text style={styles.fine_dust_font}>실내 미세먼지</Text>
      <View style={styles.fine_dust_border}>
        <Image
          source={require('../../assets/contents/fine_dust.png')}
          style={styles.fine_dust}
        />
        <Text style={styles.fine_dust_value}>{dustData}</Text>
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
