import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./header.js";
import List_Contents from "./List_Contents.js";

function ListScreen() { // 리스트 스크린 헤더 및 중심 컴포넌트 결합
  return (
    <View style={style.Screen}>
      <Header />
      <List_Contents />
    </View>
  );
}

// 스타일 정의
const style = StyleSheet.create({
  Screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default ListScreen;
