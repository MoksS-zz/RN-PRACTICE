import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

interface AddTodo {
  onSubmit(title: string): void;
}

function AddTodo({ onSubmit }: AddTodo) {
  const [value, setValue] = useState('');

  function onPressButton() {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Invalid title');
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder='title name...'
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <AntDesign.Button onPress={onPressButton} name='pluscircleo'>
        Добавить
      </AntDesign.Button>
      {/* <Button 
        title='Добавить' 
        onPress={ onPressButton }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: Dimensions.get('window').width > 400 ? '60%' : '50%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});

export default AddTodo;
