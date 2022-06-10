import { StyleSheet } from 'react-native';
import { useAppSelector } from '@src/hooks';

export default function MainStyle () {
  const { colors } = useAppSelector((state) => state.theme.theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15,
    },
    backgroundApp: {
      flex: 1,
      backgroundColor: colors.background,
    }
  });
}
