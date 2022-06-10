import React from 'react';
import { RadioButton, Drawer } from 'react-native-paper';
import { ButtonChangeThemeStyle } from '@src/styles';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { setTheme } from '@src/store/reducers/themeSlice';
import { darkTheme, lightTheme } from '@src/themes';
import { DrawerStyle } from '@src/styles';

export default function ButtonChangeTheme(): JSX.Element {
  const { themeName } = useAppSelector((state) => state.theme.theme)
  const drawerStyle = DrawerStyle();
  const style = ButtonChangeThemeStyle();
  const dispatch = useAppDispatch();

  const changeTheme = (themeName: string): void => {
    switch ( themeName ) {
      case 'dark': {
        dispatch(setTheme(darkTheme));
        break;
      }
      case 'light': {
        dispatch(setTheme(lightTheme));
        break;
      }
      default: {
        dispatch(setTheme(lightTheme));
        break;
      }
    }
  };

  return (
    <>
      <Drawer.Item
        style={ drawerStyle.drawer }
        icon="palette"
        label="Change theme"
      />
      <RadioButton.Group onValueChange={(value: string) => changeTheme(value)} value={ themeName }>
        <RadioButton.Item label="light theme" value="light" labelStyle={ style.label } />
        <RadioButton.Item label="dark theme" value="dark" labelStyle={ style.label } />
      </RadioButton.Group>
    </>
  )
};
