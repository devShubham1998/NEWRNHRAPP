import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/common/Loader';
import {fetchData} from '../store/slices/message';

const HomeScreen = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const {loading} = useSelector((state: any) => state.message);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home Screen</Text>
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default HomeScreen;
