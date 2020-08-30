import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

interface AddTodo {
  onSubmit(title: string): void
}

function AddTodo({ onSubmit }: AddTodo) {
  const [value, setValue] = useState('');

  function onPressButton() {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Invalid title');
    } 

  }

  return (
    <View style={ styles.block }>
      <TextInput 
        style={ styles.input }
        placeholder='title name...'
        value={ value }
        onChangeText={ setValue }
        autoCorrect={ false }
        autoCapitalize='none'
      />
      <Button 
        title='Добавить' 
        onPress={ onPressButton }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});

export default AddTodo;