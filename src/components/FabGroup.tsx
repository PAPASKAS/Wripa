import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

export default function FabGroup (): JSX.Element {
  const [ visible, setVisible ] = React.useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Portal>
      <FAB.Group
        visible={ true }
        open={ visible }
        icon={ visible ? 'minus' : 'plus' }
        actions={[
          {
            icon: 'plus',
            label: 'new page',
            onPress: () => console.log('Pressed add') },
          {
            icon: 'cog',
            label: 'Settings',
            onPress: () => navigate('settings'),
          },
          {
            icon: 'email',
            label: 'Library',
            onPress: () => navigate('library'),
            small: false,
          },
        ]}
        onStateChange={ () => setVisible(!visible) }
      />
    </Portal>
  );
};
