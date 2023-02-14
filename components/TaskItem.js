import {StyleSheet, View, Text, Pressable} from 'react-native'

function TaskItem(props) {
    return (
        <View style={styles.taskItem}>
          <Pressable 
            //android_ripple={{color: '#dddddd'}}\\ 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={(pressData) => pressData.pressed && styles.pressedItem}>
              <Text style={styles.taskText}>{props.text}</Text>
          </Pressable>
        </View>
    );
}

export default TaskItem;

const styles = StyleSheet.create({  
  taskItem: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#1a1d7a',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  taskText: {
    color: 'white'
  },
});