import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    user: Yup.string().matches(/^\d{10}$/, 'El usuario debe ser un número de 10 dígitos').required('Campo Obligatorio'),
    nombre: Yup.string().matches(/^[a-zA-Z]+$/, 'El nombre solo puede contener letras').required("Campo Obligatorio"),
    appat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido paterno solo puede contener letras').required("Campo Obligatorio"),
    apmat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido materno solo puede contener letras'),
    tarjeta: Yup.string().required("Campo Obligatorio"),
    password: Yup.string().matches(/^[a-zA-Z0-9]{8,16}$/, 'La contraseña debe tener entre 8 y 16 caracteres alfanuméricos').required('Campo Obligatorio'),
});

export default function Registro({ navigation }){
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Registro</Title>
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
                            mode="outlined"
                            label="Usuario"
                            style={styles.input}
                            onChangeText={handleChange('user')}
                            onBlur={handleBlur('user')}
                            value={values.user}
                        />
                        {touched.user && errors.user && <Text style={styles.error}>{errors.user}</Text>}

                        <TextInput
                            mode="outlined"
                            label="Nombre"
                            style={styles.input}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            value={values.nombre}
                        />
                        {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                        <TextInput
                            mode="outlined"
                            label="Apellido Paterno"
                            style={styles.input}
                            onChangeText={handleChange('appat')}
                            onBlur={handleBlur('appat')}
                            value={values.appat}
                        />
                        {touched.appat && errors.appat && <Text style={styles.error}>{errors.appat}</Text>}

                        <TextInput
                            mode="outlined"
                            label="Apellido Materno"
                            style={styles.input}
                            onChangeText={handleChange('apmat')}
                            onBlur={handleBlur('apmat')}
                            value={values.apmat}
                        />
                        {touched.apmat && errors.apmat && <Text style={styles.error}>{errors.apmat}</Text>}

                        <TextInput
                            mode="outlined"
                            label="N° de Tarjeta"
                            style={styles.input}
                            onChangeText={handleChange('tarjeta')}
                            onBlur={handleBlur('tarjeta')}
                            value={values.tarjeta}
                        />
                        {touched.tarjeta && errors.tarjeta && <Text style={styles.error}>{errors.tarjeta}</Text>}

                        <TextInput
                            mode="outlined"
                            label="Contraseña"
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                            Regístrate
                        </Button>
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
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginTop: 8,
    },
    error: {
        fontSize: 12,
        color: 'red',
        marginBottom: 8,
    },
});