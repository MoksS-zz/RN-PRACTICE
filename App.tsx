import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

interface TodosList {
  id: string,
  title: string
}

export default function App() {
  const [todos, setTodos] = useState<TodosList[]>([]);

  function addTodo(title:string): void {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  }

  function removeTodo(id: string) :void {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <View>
      <Navbar title='Todo App!' />
      <View style={ styles.container }>
        <AddTodo onSubmit={ addTodo }/>

        <FlatList 
          data={ todos }
          keyExtractor={ item => item.id }
          renderItem={ ({ item }) => (
            <Todo 
              todo={ item }
              onRemove={ removeTodo }
            />
          )}
        />
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
