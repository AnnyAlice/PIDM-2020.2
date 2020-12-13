import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../Trabalho01/componentes/style'
import { estilo } from './style'

export class Navbar extends Component {
    render() {
        return (
            <View style={estilo.navbar}>
                <Text>Votação de Cidades
                </Text>
            </View>
        )
    }
}

export default Navbar
