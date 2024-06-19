import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CoffeeCard</Text>
            <Text style={styles.title}>Bienvenido</Text>
            <Button title="Consulta de Saldo" onPress={()=>navigation.navigate('CSaldo')} />
            <Button title="Consulta de Movimientos" onPress={()=>navigation.navigate('CMovimiento')} />
            <Button title="Logout" onPress={()=>navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
});