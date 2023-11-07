import React from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  const handlePress = async (action) => {
    try {
      const response = await fetch(`http://192.168.137.112:5000/led/${action}`, {
        method: 'POST', // 또는 'GET', Flask 서버 설정에 맞춰주세요.
      });
      const data = await response.json();
      Alert.alert(data.status);
    } catch (error) {
      Alert.alert('Error', 'Cannot communicate with the server');
    }
  };

  return (
    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Turn ON LED" onPress={() => handlePress('on')} />
      <Button title="Turn OFF LED" onPress={() => handlePress('off')} />
    </View>
  );
};

export default App;
