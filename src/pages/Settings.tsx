import React from 'react';
import ButtonChangeTheme from '@src/components/ButtonChangeTheme';
import { Divider } from 'react-native-paper';

export default function Settings(): JSX.Element {
  return (
    <>
      <ButtonChangeTheme />
      <Divider />
    </>
  );
};
