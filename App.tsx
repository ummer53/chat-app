import React from 'react';
import {StyleSheet, View} from 'react-native';
import Requests from './src/pages/requests';

const App = () => {
  return (
    <View style={styles.container}>
      <Requests />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});

export default App;
