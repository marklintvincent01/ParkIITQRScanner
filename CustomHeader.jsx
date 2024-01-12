import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
  },
  button: {
    padding: 10,
  },
});

export default CustomHeader;