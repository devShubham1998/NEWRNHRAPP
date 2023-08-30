import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {fontScale, heightScale, verticalScale} from '../../helpers';

interface DropDown {
  widthProps: any;
  dropDownData: any;
  placeHolederName: string;
}
const CustomDropDown = ({
  widthProps,
  dropDownData,
  placeHolederName,
}: DropDown) => {
  const [value, setValue] = useState(null);
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, {width: widthProps}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropDownData}
        search
        maxHeight={300}
        labelField={'label'}
        valueField="value"
        placeholder={placeHolederName}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => setValue(item.value)}
      />
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: heightScale(40),
    borderWidth: 1,
    borderColor: '#D8D6D6',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: verticalScale(10),
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: fontScale(14),
    fontFamily: 'Roboto-Light',
  },
  selectedTextStyle: {
    fontSize: fontScale(14),
    fontFamily: 'Roboto-Medium',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
