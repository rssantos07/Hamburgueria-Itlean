import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, Button, TextInput } from 'react-native'


export default function Compra({ navigation, route }) {

    const [item, setItem] = useState(null)
    const [currentPrice, setCurrentPrice] = useState()
    const [totalItens, setTotalItens] = useState(1)

    function getDetail() {

        return fetch(`https://615b13564a360f0017a8147e.mockapi.io/${route.params.target}/${route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    setItem(response)
                    setCurrentPrice(parseFloat(response.price))
                })

    }

    function more() {

        setCurrentPrice(currentPrice + parseFloat(item.price))
        setTotalItens(totalItens + 1)

    }

    function less() {

        if(totalItens > 0) {

            setCurrentPrice(currentPrice - parseFloat(item.price))
            setTotalItens(totalItens - 1)

        }

    }

    useEffect(() => {

        getDetail()

    },[])

    return <View style={styles.container}>

        <Image style={styles.backgroundImage} source={{uri: item?.image}} />

        <View style={styles.panel}>

            <Text>{ item?.name }</Text>
            <Text>{ item?.description }</Text>

            <View style={styles.manipulationPrice}>
                <Button title="-" onPress={() => { less() }} />
                <Text>{ totalItens }</Text>
                <Button title="+" onPress={() => { more() }} />
            </View>

            <TextInput
                style={styles.textArea}
                placeholder="Digite sua observação aqui"
                multiline={true}
            />

            <Text>R$ { currentPrice }</Text>

            <Button title="Finalizar" onPress={() => { navigation.navigate('Finalizar') }} />

        </View>

    </View>

}
const styles = StyleSheet.create({

    container: {

        width: '100%',
        minHeight: '100%'

    },
    backgroundImage: {

        width: '100%',
        height: '200px'

    },
    panel: {

        width: '100%',
        borderRadius: 12,
        minHeight: '100%',
        backgroundColor: 'white',
        transform: [{translateY: -12}]

    },
    manipulationPrice: {

        flexDirection: 'row'

    },
    textArea: {

        height: 200

    }

})
