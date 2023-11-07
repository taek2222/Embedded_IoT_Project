import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Bulb() {
  return (
    <View style={styles.light}>
      <Image
        source={{
          uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/light_on.png",
        }}
        style={{ width: 100, height: 100, marginLeft: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  light: {
    width: 330,
    height: 150,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 15,
  },
});

export default Bulb;
