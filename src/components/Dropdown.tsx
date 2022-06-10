import React, { useState, ReactNode } from 'react';
import { View, Animated } from 'react-native';

interface Props {
  children: ReactNode;
}

export default function Dropdown ({ children }: Props): JSX.Element {
  const [ isVisible, setVisible ] = useState<boolean>(false);

  return (
    <View>
      { children }
    </View>
  );
}
