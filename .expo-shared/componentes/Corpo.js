import React, { Component } from 'react'
import { Image, View } from 'react-native'
import styles from "./style.js"

export class Corpo extends Component {
    render() {
        var foto = {
            uri: "https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Ekko_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20150828152359&path-prefix=pt-br"
        }
            return (
            <View>
                <Image source={foto} style={styles.img}></Image>
            </View>
        )
    }
}

export default Corpo
