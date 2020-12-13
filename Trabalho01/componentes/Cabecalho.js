import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./style.js"


export class Cabecalho extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    {this.props.nome}
                </Text>
                <Text style={styles.subTitle}>
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}

export default Cabecalho
