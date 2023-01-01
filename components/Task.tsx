import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const Task = ({text}: any) => {
  return (
    <View style={styles.items}>
      <View style={styles.leftItem}>
        <View style={styles.circular}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      {/* <View>
        <TouchableOpacity style={styles.button}>
          <Text>delete</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#f3f3ed',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    margin: 15,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circular: {
    marginRight: 15,
    width: 13,
    height: 13,
    borderRadius: 10,
    opacity: 0.4,
    backgroundColor: 'green',
  },
  itemText: {maxWidth: '80%'},
  button: {
    alignItems: 'center',
    width: 50,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    color: 'black',
  },
});

export default Task;
