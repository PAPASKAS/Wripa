import React from 'react';
import { Text } from 'react-native'
import { useParams } from 'react-router-dom';

export default function Book(): JSX.Element {
  const { name } = useParams();

  return (
    <Text>
      { name as string }
    </Text>
  );
}