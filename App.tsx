import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

interface TodosList {
  id: string,
  title: string
}

export default function App() {
  const [todos, setTodos] = useState<TodosList[]>([
    { id: '1', title: 'RN'},
    { id: '2', title: 'RN RN'},
    { id: '3', title: 'RN RN RN'}
  ]);
  const [todoId, setTodoId]= useState<string | null>(null);

  function addTodo(title:string): void {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  }

  function removeTodo(id: string) {
    const todo = todos.find(todo => todo.id === id);

    Alert.alert(
      'Удаление элемента',
      `Удалить элемент? ${todo?.title}`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        { 
          text: 'Удалить',
          style: 'destructive', 
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id));
          }
        }
      ],
      { cancelable: false }
    );
  }

  let content = (
    <MainScreen 
      todos={ todos }
      addTodo={ addTodo }
      removeTodo={ removeTodo }
      openTodo={ setTodoId }
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen 
        onRemove={ removeTodo }
        goBack={ () => setTodoId(null) }
        todo={ selectedTodo! }
      />)
  }

  return (
    <View>
      <Navbar title='Todo App!' />
      <View style={ styles.container }>
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
