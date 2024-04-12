import React from 'react';
import { View, Text } from 'react-native';
import { colors, globalStyle } from '../../config/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import { Operator } from '../enum/Operator';

const CalculatorScreen = () => {

  const {
    mainResult, subResult,
    buildNumber, clean, toggleSign, deleteCharacter, signOperation,
  } = useCalculator();

  return (
    <View style = { globalStyle.calculatorContainer }>
      
      <View style = { globalStyle.displayContainer }>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={ 1 }
          style = { globalStyle.mainResult }>{ mainResult }</Text>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={ 1 }
          style = { globalStyle.subResult }>{ subResult }</Text>
      </View>

      <View style = { globalStyle.gridContainer }>
        <CalculatorButton onPress={ clean } label="C" color = { colors.lightGray } blackText/>
        <CalculatorButton onPress={ toggleSign } label="+/-" color = { colors.lightGray } blackText/>
        <CalculatorButton onPress={ deleteCharacter} label="DEL" color = { colors.lightGray } blackText/>
        <CalculatorButton onPress={ () => signOperation(Operator.DIVIDE) } label="÷" color = { colors.orange }/>
      </View>

      <View style = { globalStyle.gridContainer }>
        <CalculatorButton onPress={ () => buildNumber('7') } label="7"/>
        <CalculatorButton onPress={ () => buildNumber('8') } label="8"/>
        <CalculatorButton onPress={ () => buildNumber('9') } label="9"/>
        <CalculatorButton onPress={ () => signOperation(Operator.MULTIPLY) } label="X" color = { colors.orange }/>
      </View>
      
      <View style = { globalStyle.gridContainer }>
        <CalculatorButton onPress={ () => buildNumber('4') } label="4"/>
        <CalculatorButton onPress={ () => buildNumber('5') } label="5"/>
        <CalculatorButton onPress={ () => buildNumber('6') } label="6"/>
        <CalculatorButton onPress={ () => signOperation(Operator.SUBSTRACT) } label="-" color = { colors.orange }/>
      </View>
      
      <View style = { globalStyle.gridContainer }>
        <CalculatorButton onPress={ () => buildNumber('1') } label="1"/>
        <CalculatorButton onPress={ () => buildNumber('2') } label="2"/>
        <CalculatorButton onPress={ () => buildNumber('3') } label="3"/>
        <CalculatorButton onPress={ () => signOperation( Operator.ADD ) } label="+" color = { colors.orange }/>
      </View>

      <View style = { globalStyle.gridContainer }>
        <CalculatorButton onPress={ () => buildNumber('0')} label='0' doubleSize/>
        <CalculatorButton onPress={ () => buildNumber('.')} label='.'/>
        <CalculatorButton onPress={ () => signOperation( Operator.EQUAL ) } label="=" color = { colors.orange }/>
      </View>

    </View>
  );
};

export default CalculatorScreen;