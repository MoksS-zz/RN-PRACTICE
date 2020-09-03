import React from 'react';
import { Text, StyleSheet, StyleProp } from 'react-native';

interface AppTextBoldProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

function AppTextBold(props: AppTextBoldProps) {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold',
  },
});

export default AppTextBold;
