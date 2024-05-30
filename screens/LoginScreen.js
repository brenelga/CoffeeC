import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from 'axios';
import HomeScreen from './HomeScreen';
import Registro from "./Registro";

export default function LoginScreen({ navigation }){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegistro = () => {
        navigation.navigate("Registro");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput style = {styles.input} placeholder="Usuario" value={user} onChangeText={setUser} />
            <TextInput style = {styles.input} placeholder="Contrasena" value={password} onChangeText={setPassword} />
            <Button title="Iniciar Sesión" onPress={handleLogin}/>
            <Button title="Registrate" onPress={handleRegistro}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});