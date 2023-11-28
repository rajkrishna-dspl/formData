import {View, Text} from 'react-native';
import React from 'react';

const OutputScreen = ({route}) => {
  const {username, email, password} = route.params;
  return (
    <View>
      <Text>Your Username is : {username}</Text>
      <Text>Your Email is : {email}</Text>
      <Text>Your Password is : {password}</Text>
    </View>
  );
};

export default OutputScreen;
