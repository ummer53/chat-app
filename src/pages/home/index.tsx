import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainLayout from '../../components/MainLayout/MainLayout';

export default function Home() {
  console.log('home mounted');
  return (
    <View style={styles.container}>
      <MainLayout>
        <View>
          <Text>Home</Text>
        </View>
      </MainLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});
