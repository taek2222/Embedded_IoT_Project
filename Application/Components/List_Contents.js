import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

function List_Contents() { // 리스트 화면 부분
  const [data, setData] = useState([]);

  useEffect(() => { // Spring boot 서버에 리스트 데이터 요청
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://172.20.10.2:8080/api/doorstatus"
        );
        const json = await response.json();
        const sortedData = json.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setData(sortedData);
      } catch (error) {
        // 에러 처리
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (dateString) => { // 출력 리스트 화면 변수들 설정
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesPadded = minutes < 10 ? "0" + minutes : minutes;
    const secondsPadded = seconds < 10 ? "0" + seconds : seconds;

    return `${year} / ${month} / ${day} - ${hours}:${minutesPadded}:${secondsPadded} ${ampm}`;
  };

  const renderItem = ({ item }) => {
    const displayStatus = item.status === "closed" ? "닫힘" : "열림";
    const statusColor = item.status === "closed" ? "red" : "green";

    return (
      <View style={styles.item}>
        <Text style={[styles.title, { color: statusColor }]}>
          ✔️ {displayStatus}
        </Text>
        <Text style={styles.timestamp}>{formatDate(item.timestamp)}</Text>
      </View>
    );
  };

  return ( // 리스트 표시 화면
    <View style={styles.List_Contents}>
      <Image
        source={require("../assets/contents/list.png")}
        style={styles.List_main}
      />
      <View style={styles.Box_Boder}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  List_Contents: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  List_main: {
    width: 190,
    height: 60,
  },
  Box_Boder: {
    width: 340,
    height: 550,
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 30,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 10,
    borderBottomWidth: 2, // 선의 두께
    borderBottomColor: "gray", // 선의 색상 (회색)
  },
  title: {
    marginLeft: -5,
    fontSize: 20,
    fontWeight: "bold",
  },
  timestamp: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  dot_image: {
    width: 20,
    height: 20,
  },
});

export default List_Contents;
