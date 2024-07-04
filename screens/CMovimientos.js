import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col} from "react-native-table-component";

export default function CMovimiento({navigation}){
    const handleReturn = () =>{
        navigation.navigate('Home');
    };

    const TablaM = () => {
        const tableHead = ['Fecha', 'Tipo', 'Monto'];
        const Datos = [['01/07/2024', 'Recarga', '200'], ['01/07/2024', 'Compra', '50']];
    }

    return (
        <View style={styles.container}>
            <Title style={styles.titulo}>Consulta de Movimientos</Title>
            <ScrollView>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    titulo: {

    },
    head: {

    },
    text: {

    }
})