import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://miro.medium.com/max/3840/1*6k4yENmzKtcfhGmNYbzadA.jpeg'}} style={{width: 100, height: 100}}></Image>
                <Text>Nome: {this.props.route.params.nome}</Text>
                <Text>Idade: {this.props.route.params.idade}</Text>
                <Text>Email: {this.props.route.params.email}</Text>
                <Button title="HOME" onPress={()=>{this.props.navigation.navigate('Home')}}></Button>
            </View>
        )
    }
}

export default Perfil
