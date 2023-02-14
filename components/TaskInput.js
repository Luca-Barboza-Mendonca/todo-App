import {useState} from 'react'
import {View, Button, TextInput, StyleSheet, Modal, Image} from 'react-native'

function TaskInput (props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');
    

    function taskinputHandler(enteredText) {
        setEnteredTaskText(enteredText);
    };

    function addTaskHandler() {
        props.addHandler(enteredTaskText);
        setEnteredTaskText('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image 
              source={require('../assets/images/goal.png')} 
              style={styles.image}  
            />
            <TextInput 
              placeholder='Your current task' 
              style={styles.textInput}
              onChangeText={taskinputHandler}
              value={enteredTaskText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cancel" onPress={props.endTaskAdd}/>
              </View>
              <View style={styles.button}>
                <Button title="Add Task" onPress={addTaskHandler}/>
              </View>
              
            </View>
          </View>
      </Modal>
    );
}

export default TaskInput

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#8BA9D4',
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      padding: 16,
    },
    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    button: {
      width: '30%',
      marginHorizontal: 8,
    },
})
