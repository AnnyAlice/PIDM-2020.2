import React, { Component } from 'react'
import { Image, View } from 'react-native'

export class Corpo extends Component {
    render() {
        var foto = {
            uri: "https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Ekko_OriginalLoading.jpg/revision/latest/smart/width/200/height/200?cb=20150828152359&path-prefix=pt-br"
        }
            return (
            <View>
                <Image source={foto} style={{width: 400, height: 400}}></Image>
            </View>
        )
    }
}

export default Corpo
