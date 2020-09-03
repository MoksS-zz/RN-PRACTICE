import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from 'react-native';
import { THEME } from '../theme';
import AppButton from './UI/AppButton';

interface EditModalProps {
  visible: boolean;
  onCancel(): void;
  onSave(value: string): void;
  value: string;
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
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
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
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  button: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default EditModal;
