import React from 'react';
import { View } from 'react-native';

import Header from './Components/header.js';
import Contents from './Components/Contents.js';

function App () {
  return (
    <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Header/>
      <Contents/>
    </View>
  );
};

export default App;
