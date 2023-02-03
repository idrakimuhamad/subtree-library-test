import React from 'react';
import { Pressable, Text } from 'react-native';

export function Button({ title = '' }) {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
}
