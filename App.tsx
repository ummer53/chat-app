import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Requests from './src/pages/requests';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Requests />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});

export default App;
