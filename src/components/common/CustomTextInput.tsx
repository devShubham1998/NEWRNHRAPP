import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  fontScale,
  heightScale,
  horizontalScale,
  verticalScale,
  widthScale,
} from '../../helpers';

interface TEXTPROPS {
  textValue: any;
  onChangeValue: any;
  placeHolderText: string;
  isSecureTextEntry: boolean;
}

const CustomTextInput = ({
  textValue,
  onChangeValue,
  placeHolderText,
  isSecureTextEntry,
}: TEXTPROPS) => {
  return (
    <TextInput
      placeholder={placeHolderText}
      value={textValue}
      onChangeText={onChangeValue}
      placeholderTextColor={'#ABABAB'}
      style={styles.inputBox}
      secureTextEntry={isSecureTextEntry}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputBox: {
    width: '85%',
    height: heightScale(40),
    fontFamily: 'Roboto-Regular',
    borderRadius: 8,
    marginTop: verticalScale(25),
    borderColor: '#0051A3',
    borderWidth: widthScale(1),
    fontSize: fontScale(12),
    paddingHorizontal: horizontalScale(14),
  },
});
