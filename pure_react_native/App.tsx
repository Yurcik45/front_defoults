import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

const App = () => {
  console.info('test');
  const requestCameraPermission = () => {
    RNCalendarEvents.requestPermissions().then(
      result => {
        Alert.alert('Auth requested', result);
      },
      result => {
        console.error(result);
      },
    );
  };
  return (
    <View>
      <Text>{'TEST'}</Text>
      <Button onPress={requestCameraPermission} title={'test req'} />
    </View>
  );
};

export default App;
