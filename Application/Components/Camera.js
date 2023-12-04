import React from 'react';
import { View, Text } from 'react-native';

import Header from "./header.js";

function CameraScreen() {
    return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Header />
        </View>
      );
}

export default CameraScreen;