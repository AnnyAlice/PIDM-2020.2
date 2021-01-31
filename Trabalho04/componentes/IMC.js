import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'


export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: 0,
            peso: 0
        }
    }

    render() {
        return (
            <View>
                <TextInput placeholder="altura"  onChangeText={(alturaDigitada)=>{this.setState({altura:alturaDigitada})}}></TextInput>
                <TextInput placeholder="peso"  onChangeText={(pesoDigitado)=>{this.setState({peso:pesoDigitado})}}></TextInput>
                <Button title="CALCULAR" onPress={()=>{this.props.navigation.navigate('Resultado', {altura: this.state.altura, peso: this.state.peso})}}></Button>

            </View>
        )
    }
}

export default IMC
