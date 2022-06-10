import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  black,
} from '@src/styles';

export default function MenuIcon(props?: any) {
  return (
    <View style={ style.icon }>
      <View style={ style.stick } />
      <View style={ style.stick } />
      <View style={ style.stick } />
    </View>
  );
}

export const iconWidth: number = 20;

const style = StyleSheet.create({
  icon: {
    display: 'flex',
    flexDirection: 'column',
    height: 15,
    width: iconWidth,
    justifyContent: 'space-between',
  },
  stick: {
    width: iconWidth,
    height: 2,
    backgroundColor: black,
    borderRadius: 3,
  },
});
