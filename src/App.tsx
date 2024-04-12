import React from 'react';
import { StatusBar, View } from 'react-native';
import CalculatorScreen  from './presentation/screens/CalculatorScreen';
import { globalStyle } from './config/app-theme';

const App = () => {
  return (
    <View style= { globalStyle.background }>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen/>
    </View>
  );
};

export default App;