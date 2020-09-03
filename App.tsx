import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
import { THEME } from './src/theme';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

interface TodosList {
  id: string;
  title: string;
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState<TodosList[]>([
    { id: '1', title: 'RN'},
    { id: '2', title: 'RN RN'},
    { id: '3', title: 'RN RN RN'}
  ]);
  const [todoId, setTodoId] = useState<string | null>(null);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.error(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  function addTodo(title: string): void {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  }

  function removeTodo(id: string) {
    const todo = todos.find((todo) => todo.id === id);

    Alert.alert(
      'Удаление элемента',
      `Удалить элемент? ${todo?.title}`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  }

  function updateTodo(id: string, title: string) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
        todo={selectedTodo!}
      />
    );
  }

  return (
    <View>
      <Navbar title='Todo App!' />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
