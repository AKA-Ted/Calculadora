import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, globalStyle } from '../../config/app-theme';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void
}

const CalculatorButton = ({ 
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress,
  }: Props) => {

  return (
    // style = (size)  ? globalStyle.button : globalStyle.largeButton
    
    <Pressable 
        onPress={ () => onPress()  }
        style = { ({ pressed }) => ({
            ...globalStyle.button,
            width: ( doubleSize ) ? 180 : 80,
            backgroundColor: color,
            opacity: (pressed) ? 0.8 : 1,
        })}> 
        <Text style = {{ 
            ...globalStyle.buttonText,
            color: ( blackText ) ? 'black' :  colors.textPrimary,
        }}>{ label }</Text>
    </Pressable>
  );
};

export default CalculatorButton