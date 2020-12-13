import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            cidades: [
                {cidade: "Quixadá ", valor:0},
                {cidade: "Fortaleza ", valor:0},
                {cidade: "Choró ", valor:0},
            ],
        }
    }

    somar(index, valor){
        let array = [...this.state.cidades]
        array[index].valor = array[index].valor + 1;
        this.setState({
            cidades: array,
        })
    }

    render() {

        let cidades = []

        let botoes = []

        let maior = Math.max.apply(null, this.state.cidades.map((busca) => (busca.valor)))

        let menor = Math.min.apply(null, this.state.cidades.map((busca) => (busca.valor)))

        let maisVotadas = [];
        let menosVotadas = [];

        console.log(maior, ",", menor)
        
        this.state.cidades.map((busca, index) => {
            cidades.push(<Text key={index}> {busca.cidade}: {busca.valor} </Text>)
            botoes.push(<Button key={index} title={busca.cidade} onPress={()=>this.somar(index, busca.valor)}></Button>)
    
        })
            
        this.state.cidades.map((busca, index) => {
            if(busca.valor == maior && maior > 0){
                maisVotadas.push(busca.cidade)
            }
            if(busca.valor == menor && menor != maior){
                menosVotadas.push(busca.cidade)
            }

        })

        return (
            <View>
                {cidades}
                
                <Text>Mais votada(s): 
                    {maisVotadas}
                
                </Text>
                <Text> Menos votada(s):  
                    {menosVotadas}
                </Text>
                
                {botoes}
                
            </View>
        )
    }
}

export default Home
