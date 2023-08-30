import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontScale, heightScale, verticalScale} from '../../helpers';

interface BUTTONPROPS {
  onPressValue: any;
  buttonText: string;
}
const CustonButton = ({onPressValue, buttonText}: BUTTONPROPS) => {
  return (
    <TouchableOpacity onPress={onPressValue} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustonButton;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    height: heightScale(40),
  },
  buttonContainer: {
    width: '85%',
    height: heightScale(40),
    borderRadius: 20,
    marginTop: verticalScale(40),
    marginBottom: verticalScale(15),
  },
  buttonText: {
    fontSize: fontScale(14),
    fontFamily: 'Roboto-Regular',
    // fontFamily: poppinsExtraBold,
    color: '#fff',
  },
});
