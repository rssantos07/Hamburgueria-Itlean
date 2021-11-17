import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList,TouchableOpacity} from 'react-native';
import Cards from './components/Cards';

export default function Cardapio({ navigation }) {
    const [menu, setMenu] = useState({})
    function getMenu() {

        return fetch('https://615b13564a360f0017a8147e.mockapi.io/menu')
            .then(response => response.json())
            .then(response => {
                setMenu(response[0])
            })

    }

    useEffect(() => {
        getMenu()

    }, [])
    return <View style={styles.container}>

        <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={{ uri: 'https://meubistro.com/blog/wp-content/uploads/2019/05/chef-de-cozinha.jpg' }} />

        <View style={styles.panel}>

            <Text style={styles.restaurantName}>{menu.name}</Text>

            <Text style={styles.restaurantInfos}>{menu.type} - {menu.distance}</Text>

            <Text>{menu.stars} estrelas</Text>

            <FlatList
                data={menu.combos}
                renderItem={item => Cards(item, navigation, 'combos')}
                keyExtractor={item => item.id.toString()}
                style={styles.item}
            />

            <Text>Drinks</Text>

            <FlatList
                data={menu.drinks}
                renderItem={item => Cards(item, navigation, 'drinks')}
                keyExtractor={item => item.id.toString()}
                style={styles.item}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicial')}>

                <Text style={styles.textButton}>Home</Text>

            </TouchableOpacity>

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
        height: '20vh'

    },
    panel: {

        width: '100%',
        borderRadius: 12,
        minHeight: '100%',
        backgroundColor: 'white',
        transform: [{ translateY: -12 }],
        padding: 32

    },
    restaurantName: {

        color: '#464646',
        fontSize: 24


    },
    restaurantInfos: {

        color: '#6D6D6D',
        fontSize: 16

    },
    item: {

        flexDirection: 'row',
        gap: 12,
        marginBottom: 12

    },
    button: {

        height: 60,
        width: '100%',
        backgroundColor: '#F26172',
        paddingVertical: 12,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50

    },
    textButton: {

        color: 'white',
        fontSize: 24

    }

})