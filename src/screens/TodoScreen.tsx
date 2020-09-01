import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';
import AppCard from '../components/UI/AppCard';

interface TodoScreen {
  onRemove(id: string): void,
  goBack(): void,
  todo: {
    title: string,
    id: string
  } 
}

function TodoScreen({ goBack, todo, onRemove }: TodoScreen) {
  
  return (
    <View>
      <AppCard style={ styles.card }>
        <Text style={ styles.title }>{ todo.title }</Text>
        <Button 
          title='Редактировать' 
          onPress={ () => console.log('REMOVE') }
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