import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Registro from './screens/Registro';
import CSaldo from './screens/CSaldo';
import Movimiento from './screens/CMovimientos'
import { MD3DarkTheme as DefaultTheme, PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
    primary: '#C5ACC4',
    surface: 'black',
    onSurface: 'black',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Registro' component={Registro}/>
          <Stack.Screen name='Saldo' component={CSaldo}/>
          <Stack.Screen name='Movimientos' component={Movimiento}/>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
