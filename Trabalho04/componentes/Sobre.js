import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'


export class Sobre extends Component {
    render() {
        return (
            <View>
                <Text>Oi eu sou Alice, me dá um 10 :)</Text>
                <Button title="HOME" onPress={()=>{this.props.navigation.navigate('Home')}}></Button>
            </View>
        )
    }
}

export default Sobre
