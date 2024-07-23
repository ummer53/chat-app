import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Home from './pages/home';
import Requests from './pages/requests';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="Requests"
            component={Requests}
            options={{title: '', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    height: '100%',
  },
});

export default App;
