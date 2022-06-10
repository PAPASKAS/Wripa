import React, { ReactNode } from 'react';
import { Modal, Portal } from 'react-native-paper';

interface IProps {
  state: boolean;
  setState: (state: boolean) => void;
  children: ReactNode;
}

// Add outside <Button onPress={ setState(true) } />
export default function MainModal ({ state, setState, children }: IProps): JSX.Element {
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Portal>
      <Modal visible={ state } onDismiss={ () => setState(false) } contentContainerStyle={containerStyle}>
        { children }
      </Modal>
    </Portal>
  );
};

