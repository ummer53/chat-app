import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainFooter = () => {
  const navigation = useNavigation();
  const navigateTo = (screenName: string) => {
    const pushAction = StackActions.push(screenName);
    navigation.dispatch(pushAction);
  };
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Icon name="home" size={25} color="white" />
      </TouchableOpacity>
      <Icon name="bell" size={25} color="white" />
      <Icon name="search" size={25} color="white" />
      <TouchableOpacity onPress={() => navigateTo('Requests')}>
        <Icon name="handshake-o" size={25} color="white" />
      </TouchableOpacity>
      <Icon name="user" size={25} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    borderBlockColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
  },
});

export default MainFooter;
