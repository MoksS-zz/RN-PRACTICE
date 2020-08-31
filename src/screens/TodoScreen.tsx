import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

interface TodoScreen {
  goBack():void,
  todo: {
    title: string,
    id: string
  } 
}

function TodoScreen({ goBack, todo }: TodoScreen) {
  
  return (
    <View>
      <Text>{ todo.title }</Text>
      <Button 
        title='Назад'
        onPress={ goBack }
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default TodoScreen;