/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { marginTop: 20 },
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#3498db' }]}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#2ecc71' }]}>
      <Text style={styles.text}>Profile!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#e74c3c' }]}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;

