import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Bulb from "./contents/Bulb.js";
import Temperature_Fine_dust from "./Temperature_Fine_dust.js";
import Humidity_Door from "./Humiditiy_Door.js";
import Hot_cold_fan from "./contents/Hot_cold_fan.js";

const DATA = [ // Flatlist 사용을 위한 데이터 배열 생성
  { id: "1", Component: Bulb },
  { id: "2", Component: Temperature_Fine_dust },
  { id: "3", Component: Humidity_Door },
  { id: "4", Component: Hot_cold_fan },
];

function Main_Contents() { // 메인 화면 IoT 표시

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <item.Component />
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 80 }} 
    />
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
});

export default Main_Contents;
