import React, { ReactNode, useEffect } from 'react';
import { Provider } from 'react-native-paper';
import { useAppSelector, useAppDispatch } from '@src/hooks';
import { Storage } from '@src/lib';
import { setTheme } from '@src/store/reducers/themeSlice';
import { ITheme } from '@src/interfaces';

interface Props {
  children: ReactNode;
}

export default function ThemeProvider ({ children }: Props): JSX.Element {
  const theme: ITheme = useAppSelector( (state) => state.theme.theme);

  let index: number = 0;
  const dispatch = useAppDispatch();
  const storage = new Storage('@theme');

  useEffect(() => {
    storage.get<ITheme>()
      .then((res: ITheme | null) => {
        if (res) dispatch(setTheme(res));
      });
    index++;
  }, [ index === 0 ])

  return (
    <Provider theme={ theme } >
      { children }
    </Provider>
  )
};
