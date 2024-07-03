import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Title } from "react-native-paper";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>CoffeeCard</Title>
            <Text style={styles.subtitle}>Bienvenido</Text>
            <Button mode="contained" onPress={() => navigation.navigate('CSaldo')} style={styles.button}>
                Consulta de Saldo
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate('CMovimiento')} style={styles.button}>
                Consulta de Movimientos
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button}>
                Logout
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        marginTop: 8,
        marginBottom: 8,
        width: 200,
    },
});