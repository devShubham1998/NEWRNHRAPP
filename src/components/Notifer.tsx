import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {fontScale, verticalScale} from '../../helpers';
import {colors} from '../../utils/colorsConst';

type NotifierComponentProps = {
  title: string;
  description: string;
};

export const NotifierComponent = ({
  title,
  description,
}: NotifierComponentProps) => (
  <View style={styles.safeArea}>
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.title,
            title === 'Success'
              ? {color: colors().primaryColor}
              : {color: colors().passwordValidationDanger},
          ]}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors().white,
    marginTop: 10,
    width: '95%',
    borderColor: colors().borderColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignSelf: 'center',
    shadowOpacity: 0.25,
    elevation: 8,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  container: {
    shadowRadius: 4,
    paddingHorizontal: verticalScale(15),
    paddingBottom: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors().textInputColor,
    fontSize: Platform.OS === 'android' ? fontScale(14) : fontScale(14),
    fontFamily: 'Roboto-Medium',
  },
  description: {
    color: colors().textInputColor,
    // fontFamily: poppins,
    fontFamily: 'Roboto-Medium',
    marginTop: 3,
    fontSize: Platform.OS === 'android' ? fontScale(13) : fontScale(12),
  },
});
