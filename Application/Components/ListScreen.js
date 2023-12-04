import React from 'react';
import { View, Text } from 'react-native';

import Header from "./header.js";

function ListScreen() {
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

export default ListScreen;