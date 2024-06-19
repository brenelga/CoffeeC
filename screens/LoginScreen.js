import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from 'axios';
import HomeScreen from './HomeScreen';
import Registro from "./Registro";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    usuario: Yup.string().matches(/^\d{10}$/, 'Por favor escriba su matrícula, número de trabajador o número de usuario').required('Campo Obligatorio'),
    password: Yup.string().matches(/^[a-zA-Z0-9]{8,16}$/, 'Contraseña Obligatoria').required('Campo Obligatorio'),
});

export default function LoginScreen({ navigation }){
    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegistro = () => {
        navigation.navigate("Registro");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <Formik
            initialValues={{usuario: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
            >
                {({handleChange, handleBlur, handleSubmit, values, error, touched}) =>(
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder="Usuario"
                            onChangeText={handleChange('usuario')}
                            onBlur={handleBlur('usuario')}
                            value={values.usuario}
                        />
                        {touched.usuario && error.usuario && <Text style={styles.error}>{error.usuario}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder="contraseña"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {touched.password && error.password && <Text style={styles.error}>{error.password}</Text>}
                        <Button title="Iniciar Sesión" onPress={handleSubmit}/>
                        <Button title="Registrate" onPress={handleRegistro}/>
                    </View>
                )
                }
            </Formik>
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
    error: {
        fontSize: 12,
        color: 'red',
        marginBottom: 8,
    },
});