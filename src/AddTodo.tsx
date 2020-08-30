import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

function AddTodo() {
  function onPressButton() {
    console.log('click');
  }

  return (
    <View style={ styles.block }>
      <TextInput style={ styles.input }/>
      <Button title='Добавить' onPress={onPressButton}/>
    </View>
  )
}


const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});

export default AddTodo;