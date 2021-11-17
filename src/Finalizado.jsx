import React from 'react'
import { StyleSheet, View, Image, ImageBackground, Text, Button, FlatList } from 'react-native'

let array = [{id: '1', name: 'item 1', description: 'Descrição 1', value: '32,00'}, {id: '2', name: 'item 2', description: 'Descrição 2', value: '32,00'},]

export default function Finalizar({ navigation }) {

    return <View style={styles.container}>

        <Text>Pedido Finalizado</Text>

        <Button title="Voltar ao menu" onPress={() => navigation.navigate('Cardapio')} />

    </View>

}
const styles = StyleSheet.create({

    container: {

        width: '100%',
        minHeight: '100%'

    },
    backgroundImage: {

        width: '100%',
        height: '20vh'

    },
    panel: {

        width: '100%',
        borderRadius: 12,
        minHeight: '100%',
        backgroundColor: 'white',
        transform: [{translateY: -12}]

    },
    item: {

        flexDirection: 'row',
        gap: 12,
        marginBottom: 12

    }

})
