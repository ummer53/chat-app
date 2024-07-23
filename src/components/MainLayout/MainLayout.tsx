import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainFooter from './MainFooter';

const MainLayout = ({children}: {children: any}) => {
  return (
    <View style={styles.container}>
      <ScrollView>{children}</ScrollView>
      <View style={styles.messageContainer}>
        <Icon name="send" size={35} color="green" />
      </View>
      <MainFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  messageContainer: {
    position: 'absolute',
    bottom: 70,
    right: 10,
    backgroundColor: '#F0DF87',
    borderRadius: 50,
    padding: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default MainLayout;
