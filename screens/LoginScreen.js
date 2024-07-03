import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button, useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

const validationSchema = Yup.object().shape({
  usuario: Yup.string().matches(/^\d{10}$/, 'Por favor escriba su matrícula, número de trabajador o número de usuario').required('Campo Obligatorio'),
  password: Yup.string().matches(/^[a-zA-Z0-9]{8,16}$/, 'Contraseña Obligatoria').required('Campo Obligatorio'),
});

export default function LoginScreen({ navigation }) {
  const theme = useTheme();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleRegistro = () => {
    navigation.navigate("Registro");
  }

  return (
    <LinearGradient
      colors={['red', 'lightgreen', 'pink', 'purple']}
      style={styles.container}
    >
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Formik
        initialValues={{ usuario: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              label="Usuario"
              mode="outlined"
              onChangeText={handleChange('usuario')}
              onBlur={handleBlur('usuario')}
              value={values.usuario}
              error={touched.usuario && errors.usuario}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.usuario && errors.usuario && <Text style={styles.error}>{errors.usuario}</Text>}
            <TextInput
              label="Contraseña"
              mode="outlined"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={touched.password && errors.password}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>Iniciar Sesión</Button>
            <Button mode="contained" onPress={handleRegistro} style={styles.button}>Regístrate</Button>
          </View>
        )}
      </Formik>
    </LinearGradient>
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
    color: 'white',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'lightpurple',
    marginBottom: 8,
  },
  error: {
    color: 'red',
  },
});
