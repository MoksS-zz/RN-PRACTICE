import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './UI/AppTextBold';

interface NavbarProps {
  title: string;
}

function Navbar(props: NavbarProps) {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          android: styles.navbarAndroid,
          ios: styles.navbarIos,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{props.title}</AppTextBold>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : 'white',
    fontSize: 20,
  },
});

export default Navbar;
