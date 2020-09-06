import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';


export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Пишу текст чтобы писать текст, потому что Текст</Text>
      <Text>Верситя текста, текущего текста: <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'О приложении',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: 'open-bold',
    color: THEME.MAIN_COLOR
  }
})
