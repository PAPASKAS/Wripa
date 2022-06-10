import type { ITheme } from '@src/interfaces';
import color from 'color';
import { DefaultTheme } from 'react-native-paper';

export const darkTheme: ITheme = {
  ...DefaultTheme,
  themeName: 'dark',
  colors: {
    accent: '#1EB980',
    backdrop: color('#000000').alpha(0.26).rgb().string(),
    background: '#353b48',
    disabled: 'grey',
    error: '#FF8659',
    notification: '#72DEFF',
    onSurface: '#B15DFF',
    placeholder: 'grey',
    primary: '#1EB980',
    surface: '#1C1C1C',
    text: '#FAF0E6',
  },
}

export const lightTheme: ITheme = {
  ...DefaultTheme,
  themeName: 'light',
  colors: {
    accent: 'green',
    backdrop: 'yellow',
    background: '#f6f6f6',
    disabled: 'grey',
    error: '#FF8659',
    notification: 'yellow',
    onSurface: 'black',
    placeholder: 'red',
    primary: '#60ac5d',
    surface: 'white',
    text: '#000000',
  },
}

