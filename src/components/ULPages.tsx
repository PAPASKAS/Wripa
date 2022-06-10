import * as React from 'react';
import {
  FlatList,
} from 'react-native';
import {
  Text,
  Title
} from 'react-native-paper';
import { AsideStyle } from '@src/styles';

export default function ULPages(): JSX.Element {
  const style = AsideStyle();

  return (
    <FlatList
      data={[
        { title: 'Settings', url: 'Settings' },
        { title: 'Library', url: 'Library' },
      ]}
      renderItem={({ item }) =>
        <Text numberOfLines={1} ellipsizeMode="middle">{ item.title }</Text>
        // <As url={ item.url } title={ item.title } />
      }
      ListHeaderComponent={ <Title>Страницы</Title> }
      keyExtractor={ ( item, index: number ) => index.toString() }
    />
  )
}
