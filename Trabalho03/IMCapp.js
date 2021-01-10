import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import IMCCalc from './IMCCalc';

export class IMCapp extends Component {
    constructor(props){
        super(props)
        this.state = {
            pesoEstado: 0,
            alturaEstado: 0.0,
            pesoChange: 0.0,
            alturaChange: 0,
        }
    }

    mudarPeso(peso){
        this.setState({pesoChange:peso});
    }
    mudarAltura(altura){
        this.setState({alturaChange:altura});
    }

    calcular(){
        this.setState({
            alturaEstado: this.state.alturaChange,
            pesoEstado: this.state.pesoChange,
        })
    }

    render() {
        
        return (
            <View>
                
                    <TextInput placeholder="Peso (kg)" 
                        onChangeText={(peso) => this.mudarPeso(peso)}>
                    </TextInput>

                    <TextInput placeholder="Altura (M)" 
                        onChangeText= {(altura) => this.mudarAltura(altura)}>
                    </TextInput>

                    <Button title="CALCULAR" onPress={()=>this.calcular()}>
                    </Button>

                    <IMCCalc peso={this.state.pesoEstado} altura={this.state.alturaEstado}></IMCCalc>
 

            </View>
        )
    }
}

export default IMCapp
