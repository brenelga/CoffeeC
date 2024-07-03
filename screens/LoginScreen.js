import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import axios from 'axios';
import HomeScreen from './HomeScreen';
import Registro from "./Registro";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-native-paper";

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
        initialValues={{ usuario: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor="gray"
              onChangeText={handleChange('usuario')}
              onBlur={handleBlur('usuario')}
              value={values.usuario}
            />
            {touched.usuario && errors.usuario && <Text style={styles.error}>{errors.usuario}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="gray"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <Button mode="contained" onPress={handleSubmit} color="lightpurple">Iniciar Sesión</Button>
            <Button mode="contained" onPress={handleRegistro} style={styles.button} color="lightpurple">Regístrate</Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'black',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
  },
  button: {
    marginBottom: 30,
    marginTop: 8,
  }
});
