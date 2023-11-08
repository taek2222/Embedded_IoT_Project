import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Fine_dust() {
  return (
    <View>
      <Text style={styles.fine_dust_font}>실내 미세먼지</Text>
      <View style={styles.fine_dust_border}>
        <Image
          source={{
            uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/fine_dust.png",
          }}
          style={styles.fine_dust}
        />
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
});

export default Fine_dust;
