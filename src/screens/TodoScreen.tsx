import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';
import AppCard from '../components/UI/AppCard';
import EditModal from '../components/EditModal';

interface TodoScreen {
  onRemove(id: string): void,
  goBack(): void,
  onSave(id: string, value: string): void,
  todo: {
    title: string,
    id: string
  } 
}

function TodoScreen({ goBack, todo, onRemove, onSave }: TodoScreen) {
  const [modal, setModal] = useState(false);

  function saveHandler(title:string) {
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

      <AppCard style={ styles.card }>
        <Text style={ styles.title }>{ todo.title }</Text>
        <Button 
          title='Редактировать' 
          onPress={ () => setModal(true) }
        />
      </AppCard>

      <View style={ styles.buttons }>
        <View style={ styles.button }>
          <Button 
            title='Назад'
            color={ THEME.GREY_COLOR }
            onPress={ goBack }
          />
        </View>
        <View style={ styles.button }>
          <Button
            title='Удалить'
            color={ THEME.DANGER_COLOR }
            onPress={ () => onRemove(todo.id) }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
});

export default TodoScreen;