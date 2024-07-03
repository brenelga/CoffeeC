import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Registro from './screens/Registro';
import { MD3DarkTheme as DefaultTheme, PaperProvider } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: 'black',
      text: 'white',
      primary: 'lightpurple',
      surface: 'black',
      onSurface: 'white',
  },
};


export default function App() {
  return(
    <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Registro' component={Registro}/>
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
  );
}