import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Components/HomeScreen.js"; // 메인 화면
import CameraScreen from "./Components/Camera_Contents.js"; // 카메라 화면
import ListScreen from "./Components/ListScreen.js"; // 출입 관련 리스트 화면

const Tab = createBottomTabNavigator();

function App() {
  return (
    // 메인, 카메라, 출입 관련 아래 내비게이션 설정
    <NavigationContainer> 
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="메인 화면"
          component={HomeScreen}
          options={{
            tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/bottom_bar/main_screen.png")}
                style={{ width: size, height: size, tintColor: color }}
              />
            )
          }}
        />
        <Tab.Screen
          name="CCTV"
          component={CameraScreen}
          options={{ tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/bottom_bar/cctv_screen.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ) }}
        />
        <Tab.Screen
          name="출입 기록"
          component={ListScreen}
          options={{ tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/bottom_bar/list_screen.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
