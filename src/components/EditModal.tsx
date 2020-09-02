import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';

interface EditModalProps  {
  visible: boolean,
  onCancel(): void,
  onSave(id: string, value: string): void,
  value: string
} 

function EditModal({ visible, onCancel, value, onSave }: EditModalProps) {
  const [title, setTitle] = useState(value);

  function saveHandler() {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка', `Пиши больше текста`);
    } else {
      onSave(title);
    }
  }

  return (
    <Modal visible={ visible } animationType='slide' transparent={false}>
      <View style={ styles.wrap }>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input} 
          placeholder='текст пиши. ага'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.button}>
          <Button title='Отменить' onPress={ onCancel } color={THEME.DANGER_COLOR}/>
          <Button title='Сохранить' onPress={saveHandler}/>
        </View>
      </View>
    </Modal>
  )
}

const  styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  button: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default EditModal;