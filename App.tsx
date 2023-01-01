import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from 'react-native';
import Task from './components/Task';

const App = () => {
  const [task, setTask] = useState<any>();
  const [taskItem, setTaskItem] = useState<any>([]);

  const HandleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  const deleteTask = (index: any) => {
    const itemCopy = [...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.tasksSection}>
          <Text style={styles.tasksTitle}>Today's tasks</Text>
        </View>
        <View style={styles.items}>
          {taskItem.map((item: any, index: any) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addTask}>
        <TextInput
          style={styles.input}
          placeholder="write task here"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => HandleAddTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tasksTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 25,
  },
  items: {
    marginTop: 10,
  },
  addTask: {
    position: 'absolute',
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    margin: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  addText: {fontWeight: 'bold', fontSize: 35, color: 'gray'},
});

export default App;
