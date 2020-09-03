import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import { THEME } from '../theme';
import AppCard from '../components/UI/AppCard';
import EditModal from '../components/EditModal';
import AppTextBold from '../components/UI/AppTextBold';
import AppButton from '../components/UI/AppButton';

interface TodoScreen {
  onRemove(id: string): void;
  goBack(): void;
  onSave(id: string, value: string): void;
  todo: {
    title: string;
    id: string;
  };
}

function TodoScreen({ goBack, todo, onRemove, onSave }: TodoScreen) {
  const [modal, setModal] = useState(false);

  function saveHandler(title: string) {
    onSave(todo.id, title);
    setModal(false);
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)} >
        <FontAwesome name='edit' size={20}/>
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
            <AntDesign name='back' size={20} color='#fff'/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            <FontAwesome name='trash' size={20} color='#fff'/>
          </AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: Dimensions.get('window').width > 400 ? 150 : 100,
  },
  title: {
    fontSize: 20,
  },
});

export default TodoScreen;
