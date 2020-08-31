import React, { useState, ComponentState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

interface MainScreen {
  addTodo(title: string):void,
  todos: ComponentState,
  removeTodo(id: string): void,
  openTodo(id:string): void,
}

function MainScreen({ addTodo, todos, removeTodo, openTodo }: MainScreen) {

  return (
    <View>
      <AddTodo onSubmit={ addTodo }/>
      <FlatList 
        data={ todos }
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => (
          <Todo 
            todo={ item }
            onRemove={ removeTodo }
            openTodo={ openTodo }
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default MainScreen;