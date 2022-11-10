import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/home';
import Projects from './Screen/projects';
import DS from './Screen/DS';
import Inv from './Screen/inv';
import Cont from './Screen/cont';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.mainview}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
 

            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Dashboard' }}
            />
              <Stack.Screen
              name="Projects"
              component={Projects}
              options={{ title: 'Projects' }}
            />
              <Stack.Screen
              name="DS"
              component={DS}
              options={{ title: 'DataScientist' }}
              
            />
              <Stack.Screen
              name="Inv"
              component={Inv}
              options={{ title: 'invites' }}

              
            />
              <Stack.Screen
              name="Cont"
              component={Cont}
              options={{ title: 'Contributor' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainview: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  safearea: {
    height: '110%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: BACKGROUND,
  },
});
/*
585656
*/
