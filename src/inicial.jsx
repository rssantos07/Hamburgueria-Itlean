import React from 'react'
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text, Button } from 'react-native'



export default function Welcome({ navigation }) {

    return <View style={styles.container}>

            <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={{uri:'https://meubistro.com/blog/wp-content/uploads/2019/05/chef-de-cozinha.jpg'}} />

            <View style={styles.panel}>

                <Text style={styles.panelTitle}>Bem-vindo</Text>

                <Text style={styles.panelSubtitle}>Nós resolvemos isso</Text>

                <Text style={styles.panelText}>
                    Faça seu pedido agora mesmo
                    na IT Burguer e aproveite os
                    descontos e vantagens de
                    nossa plataforma!
                </Text>

                <TouchableOpacity style={styles.button}  onPress={ () => navigation.navigate('Cardapio') }>

                    <Text style={styles.textButton}>Ver Cardápio</Text>

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
        height: '40vh'

    },
    panel: {

        width: '100%',
        borderRadius: 12,
        height: '60vh',
        backgroundColor: 'white',
        padding: 32,
        alignItems: 'center',
        transform: [{ translateY: -12 }]

    },
    panelTitle: {

        color: '#464646',
        fontSize: 48,
        fontWeight: 900

    },
    panelSubtitle: {

        color: '#F26172',
        fontWeight: 500,
        fontSize: 26,
        marginBottom: 32

    },
    panelText: {

        color: '#252525',
        fontSize: 18,
        fontWeight: 200,
        textAlign: 'center'

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