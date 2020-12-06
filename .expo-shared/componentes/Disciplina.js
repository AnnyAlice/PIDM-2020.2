import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./style.js"

export class Disciplina extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text style={styles.discTitle}>
                    {this.props.disciplina}                
                </Text>
            </View>
        )

    }
}

export default Disciplina
