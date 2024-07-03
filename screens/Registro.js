import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button, useTheme } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

const validationSchema = Yup.object().shape({
  user: Yup.string().matches(/^\d{10}$/, 'El usuario debe ser un número de 10 dígitos').required('Campo Obligatorio'),
  nombre: Yup.string().matches(/^[a-zA-Z0-9]+$/, 'El nombre solo puede contener letras').required("Campo Obligatorio"),
  appat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido paterno solo puede contener letras').required("Campo Obligatorio"),
  apmat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido materno solo puede contener letras'),
  tarjeta: Yup.string().required("Campo Obligatorio"),
  password: Yup.string().matches(/^[a-zA-Z0-9]{8,16}$/, 'La contraseña debe tener entre 8 y 16 caracteres alfanuméricos').required('Campo Obligatorio'),
});

export default function Registro({ navigation }) {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={['red', 'lightgreen', 'pink', 'purple']}
      style={styles.container}
    >
      <Text style={styles.title}>Registro</Text>
      <Formik
        initialValues={{ user: '', nombre: '', appat: '', apmat: '', tarjeta: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              label="Usuario"
              mode="outlined"
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              error={touched.user && errors.user}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.user && errors.user && <Text style={styles.error}>{errors.user}</Text>}
            <TextInput
              label="Nombre"
              mode="outlined"
              onChangeText={handleChange('nombre')}
              onBlur={handleBlur('nombre')}
              value={values.nombre}
              error={touched.nombre && errors.nombre}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}
            <TextInput
              label="Apellido Paterno"
              mode="outlined"
              onChangeText={handleChange('appat')}
              onBlur={handleBlur('appat')}
              value={values.appat}
              error={touched.appat && errors.appat}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.appat && errors.appat && <Text style={styles.error}>{errors.appat}</Text>}
            <TextInput
              label="Apellido Materno"
              mode="outlined"
              onChangeText={handleChange('apmat')}
              onBlur={handleBlur('apmat')}
              value={values.apmat}
              error={touched.apmat && errors.apmat}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.apmat && errors.apmat && <Text style={styles.error}>{errors.apmat}</Text>}
            <TextInput
              label="N° de Tarjeta"
              mode="outlined"
              onChangeText={handleChange('tarjeta')}
              onBlur={handleBlur('tarjeta')}
              value={values.tarjeta}
              error={touched.tarjeta && errors.tarjeta}
              theme={{ colors: { text: theme.colors.text, placeholder: 'gray', primary: 'lightpurple' } }}
              style={styles.input}
            />
            {touched.tarjeta && errors.tarjeta && <Text style={styles.error}>{errors.tarjeta}</Text>}
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
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>Regístrate</Button>
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