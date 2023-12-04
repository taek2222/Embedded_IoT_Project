import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Bulb from "./contents/Bulb.js";
import Temperature_Fine_dust from "./Temperature_Fine_dust.js";
import Humidity_Door from "./Humiditiy_Door.js";
import Hot_cold_fan from "./contents/Hot_cold_fan.js";

const DATA = [
  { id: "1", Component: Bulb },
  { id: "2", Component: Temperature_Fine_dust },
  { id: "3", Component: Humidity_Door },
  { id: "4", Component: Hot_cold_fan },
];

function Main_Contents() {

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

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
});

export default Main_Contents;
