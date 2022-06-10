import { StyleSheet } from 'react-native';
import { useAppSelector } from '@src/hooks';

export default function DrawerStyle () {
  const { colors } = useAppSelector((state) => state.theme.theme);

  return StyleSheet.create({
    drawer: {
      backgroundColor: colors.accent,
    },
  });
};
