import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'

export default function Cards({item}, navigation, target) {

    return <TouchableOpacity style={styles.item} onPress={ () => navigation.navigate('Compra', {id: item.id, target: target}) }>

        <Image style={styles.thumbnail} source={{uri: item.image}} />
        <View style={styles.itemInfos}>
            <Text>{item.name}</Text>
            <Text style={styles.textInfo}>{item.description}</Text>
        </View>

    </TouchableOpacity>

}
const styles = StyleSheet.create({

    item: {

        backgroundColor: '#F1F1F1',
        height: 160,
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
        borderRadius: 32,
        overflow: 'hidden'

    },
    thumbnail: {

        width: 142,
        height: '100%'

    },
    itemInfos: {

        flex: 1

    },
    textInfo: {

        width: '100%'

    }

})