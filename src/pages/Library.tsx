import React from 'react';
import { Text } from 'react-native'
import { Link } from 'react-router-native';

export default function Library(): JSX.Element {
  return (
    <>
      <Text>
        Library title
      </Text>
      <Text>
        all book
      </Text>
      <Text>
        button create book
      </Text>
      <Text>
        asd
      </Text>
      <Link to="/book/ASD"><Text>book</Text></Link>
    </>
  );
};
