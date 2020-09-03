import React from 'react';
import { Text, StyleSheet, StyleProp } from 'react-native';

interface AppTextProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

function AppText(props: AppTextProps) {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});

export default AppText;
