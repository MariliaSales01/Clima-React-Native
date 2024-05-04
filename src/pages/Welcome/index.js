import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="zoomIn"
                source={require('../../assets/clima.png')}
                style={{width:'80%', alignSelf: 'center',}}
                resizeMode='contain'
            />
        </View>

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:'15%',
        backgroundColor: '#519CD9'
    },
    containerButton:{
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center',
        
    },
    button:{
        backgroundColor: '#097BD9',
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
})
