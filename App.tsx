import React from 'react';
import Routing from '@src/Routing';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from '@src/providers/ThemeProvider';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@src/store'

export default function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Routing />
        </SafeAreaProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}