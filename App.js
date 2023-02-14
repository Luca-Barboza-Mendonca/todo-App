import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
  } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  const [currentTasks, setCurrentTasks] = useState([]);
  const [count, setCount] = useState(0);

  function startAddTaskHandler() {
    setmodalIsVisible(true);
  }

  function endAddTaskHandler() {
    setmodalIsVisible(false)
  }

  function addtaskHandler(enteredTaskText) {
    setCurrentTasks(currentStateTasks => [...currentStateTasks, {text: enteredTaskText, id: Math.random().toString()}]);
    setCount(count + 1);
    endAddTaskHandler();
  }

  function deleteTaskHandler (id) {
    setCurrentTasks(currentStateTasks => {
      return currentStateTasks.filter((task) => task.id !== id);
    });
    setCount(count-1);
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Task' 
          color={"#1a1d7a"} 
          onPress={startAddTaskHandler}
        />
        <TaskInput 
          addHandler = {addtaskHandler} 
          visible={modalIsVisible} 
          endTaskAdd={endAddTaskHandler}
        />
        <View style={styles.listContainer}> 
          <Text style={styles.numberTaskText}>You have {count} task(s)</Text>
          <FlatList 
            data={currentTasks} 
            renderItem={(taskData) => {
              return (
                <TaskItem 
                  text={taskData.item.text} 
                  onDeleteItem={deleteTaskHandler}
                  id={taskData.item.id}
                />
              ); 
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          /> 
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#8BA9D4',
    flexDirection: 'column',
  },
  listContainer: {
    flex: 5,
  },
  numberTaskText: {
    fontWeight: 'bold',
  },
});
