import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'

export class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            idade: 0,
            email: '',
        
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="nome:" onChangeText={(nomeDigitado)=>{this.setState({nome:nomeDigitado})}}></TextInput>
                <TextInput placeholder="idade:"  onChangeText={(idadeDigitada)=>{this.setState({idade:idadeDigitada})}}></TextInput>
                <TextInput placeholder="email:"  onChangeText={(emailDigitado)=>{this.setState({email:emailDigitado})}}></TextInput>
                <Button title="enviar" onPress={()=>{this.props.navigation.navigate("perfil", {nome: this.state.nome, idade: this.state.idade, email: this.state.email})}}></Button>
            
            </View>
        )
    }
}

export default Cadastro
