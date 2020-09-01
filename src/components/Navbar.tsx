import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

interface NavbarProps {
  title: string
}

function Navbar(props: NavbarProps) {
  return (
    <View style={ styles.navbar }>
      <Text style={ styles.text }>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});

export default Navbar;