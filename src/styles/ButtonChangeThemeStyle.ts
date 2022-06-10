import { StyleSheet } from 'react-native';
import { useAppSelector } from '@src/hooks';

export default function ButtonChangeThemeStyle () {
  const { colors } = useAppSelector((state) => state.theme.theme);

  return StyleSheet.create({
    label: {
      color: colors.text,
    },
  })
}
