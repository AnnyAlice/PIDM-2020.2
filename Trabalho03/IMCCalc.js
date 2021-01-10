import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IMCmsg from './IMCmsg'

export class IMCCalc extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        let imc = 0
        if(this.props.peso){
            imc = this.props.peso/(this.props.altura* this.props.altura)
        }
        return (

            <View>
                <Text>
                    Seu IMC é: {imc}
                </Text>
                <IMCmsg imc={imc}></IMCmsg>
            </View>

        )
    }
}

export default IMCCalc
