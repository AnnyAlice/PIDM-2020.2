import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class IMCmsg extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let imc = this.props.imc
        let situacao = "";
        let css = style.situacao
        if(imc < 17 && imc > 0){
            situacao = "Muito abaixo do peso"
        } else if (imc > 17 && imc < 18.49){
            situacao = "Abaixo do peso"
        }else if (imc > 18.5 && imc < 24.99){
            situacao = "Peso normal"
            css = style.normal
        }else if (imc > 25 && imc < 29.99){
            situacao = "Acima do peso";
        } else if (imc > 30 && imc < 34.99){
            situacao = "Obesidade";
        } else if (imc > 35 && imc < 39.99){
            situacao = "Obesidade severa";
        } else if(imc > 40){
            situacao = "Obesidade morbida";
        }

        return (
            <View>
                <Text style={css}>
                    {situacao}
                </Text>
                
            </View>
        )
    }
}
const style = StyleSheet.create({
    situacao:{
        color: "red",
    },
    normal:{
        color: "blue"
    }
        
})

export default IMCmsg
