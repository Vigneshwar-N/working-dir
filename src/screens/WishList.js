import {View, Text} from 'react-native';
import React from 'react';

export default function WishList() {
  return (
    <View>
      <View
        style={{height: 100, width: 100, backgroundColor: '#000000'}}></View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#FFFFFF',
          top: -50,
          opacity: 0.5,
        }}></View>
    </View>
  );
}
