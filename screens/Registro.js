import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    user: Yup.string().matches(/^\d{10}$/, 'El usuario debe ser un número de 10 dígitos').required('Campo Obligatorio'),
    nombre: Yup.string().matches(/^[a-zA-Z0-9]+$/, 'El nombre solo puede contener letras').required("Campo Obligatorio"),
    appat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido paterno solo puede contener letras').required("Campo Obligatorio"),
    apmat: Yup.string().matches(/^[a-zA-Z]+$/, 'El apellido materno solo puede contener letras'),
    tarjeta: Yup.string().required("Campo Obligatorio"),
    password: Yup.string().matches(/^[a-zA-Z0-9]{8,16}$/, 'La contraseña debe tener entre 8 y 16 caracteres alfanuméricos').required('Campo Obligatorio'),
});

export default function Registro({ navigation }){
    return (
        <View style={styles.container}>
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
                            style={styles.input}
                            placeholder="Usuario"
                            onChangeText={handleChange('user')}
                            onBlur={handleBlur('user')}
                            value={values.user}
                        />
                        {touched.user && errors.user && <Text style={styles.error}>{errors.user}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            value={values.nombre}
                        />
                        {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Apellido Paterno"
                            onChangeText={handleChange('appat')}
                            onBlur={handleBlur('appat')}
                            value={values.appat}
                        />
                        {touched.appat && errors.appat && <Text style={styles.error}>{errors.appat}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Apellido Materno"
                            onChangeText={handleChange('apmat')}
                            onBlur={handleBlur('apmat')}
                            value={values.apmat}
                        />
                        {touched.apmat && errors.apmat && <Text style={styles.error}>{errors.apmat}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="N° de Tarjeta"
                            onChangeText={handleChange('tarjeta')}
                            onBlur={handleBlur('tarjeta')}
                            value={values.tarjeta}
                        />
                        {touched.tarjeta && errors.tarjeta && <Text style={styles.error}>{errors.tarjeta}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                        <Button onPress={handleSubmit} title="Registrate" />
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