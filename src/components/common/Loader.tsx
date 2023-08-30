import React from 'react';
import AwesomeLoading from 'react-native-awesome-loading';

const Loader = () => {
  return (
    <AwesomeLoading
      textStyle={{color: 'red'}}
      indicatorId={10}
      size={80}
      isActive={true}
    />
  );
};

export default Loader;
