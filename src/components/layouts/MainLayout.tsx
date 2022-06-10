import React from 'react';
import { StatusBar, View } from 'react-native';
import { Outlet } from 'react-router-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStyle } from '@src/styles';
import FabGroup from '@src/components/FabGroup';

export default function MainLayout() {
  const style = MainStyle();

  return (
    <>
      <StatusBar />
      <View style={ style.backgroundApp }>
        <SafeAreaView style={ style.container }>
          <Outlet />
          <FabGroup />
        </SafeAreaView>
      </View>
    </>
  );
}
