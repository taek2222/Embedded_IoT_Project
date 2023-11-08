import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Fine_dust() {
  return (
    <View style={styles.fine_dust_border}>
      <Image
        source={{
          uri: "/Users/ohyeontaek/embedded/embedded/assets/contents/fine_dust.png",
        }}
        style={styles.fine_dust}
      />
        </View>
  );
}

const styles = StyleSheet.create({
    fine_dust_border: {
      // 미세먼지 박스
      width: 160, 
      height: 150,
      marginTop: 20,
      borderWidth: 2,
      borderRadius: 15,
      flexDirection: "row",
    },
    fine_dust: {
        // 미세먼지 사진
        width: 60,
        height: 60,
        marginLeft: 10,
        marginTop: 42
      },
  });

export default Fine_dust;
