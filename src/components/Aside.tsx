import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { Portal } from 'react-native-paper';
import AsideStyle from '@src/styles/AsideStyle';
import ULPages from '@src/components/ULPages';

const seventyScreenWidth: number = Dimensions.get('window').width * 0.7; // 70% screen width
const animate_state = {
  start: 0,
  end: Math.round(seventyScreenWidth),
};
const width: Animated.Value = new Animated.Value(animate_state.start);

export default function Aside(): JSX.Element {
  const style = AsideStyle();

  return (
    <Portal>
      <Animated.View style={[ style.aside, { width } ]}>
        <ULPages />
      </Animated.View>
    </Portal>
  );
}

let visible: boolean = false;
export function toggleAside(): void {

  Animated.timing(width, {
    toValue: visible ? animate_state.start : animate_state.end,
    useNativeDriver: false,
    duration: 500,
  }).start();

  visible = !visible;
}
