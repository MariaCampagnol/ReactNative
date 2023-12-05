import React, { Component } from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import Style from '../../styles/Style'

import Numero from './Numero'

export default class Mega extends Component {
    // state = {
    //     qtdNumeros: this.rops.qtdNumeros
    // }

    constructor(props){
        super(props)

        this.state = {
            qtdNumeros: props.qtdNumeros,
            numeros: []
        }
    }

    alterarQtdNumero = (novaQtd) => {
        this.setState({ qtdNumeros: +novaQtd })
    }

    gerarNumeroNaoContido = nums => {
        const num = parseInt(Math.random() * 60) + 1
        return nums.includes(num) ? this.gerarNumeroNaoContido(nums) : num
    }

    gerarNumeros = () => {
        
        // -------------------- 1 forma ------------------------------------------
        // const { qtdNumeros } = this.state
        // const numeros = []

        // for (let index = 0; index < qtdNumeros; index++) {
        //     numeros.push(this.gerarNumeroNaoContido(numeros))
        // }

        // numeros.sort((a, b) => a-b)

        // -------------------- 2 forma ------------------------------------------

        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a-b)

        this.setState({numeros})
    }

    exibirNumeros() {
        const nums = this.state.numeros
        return nums.map(n => {
            return <Numero key={n} num={n} />
        })
    }

    render(){
        return (
            <>
                <Text style={Style.FontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    placeholder='Altere e qtd de números...' 
                    value={`${this.state.qtdNumeros}`} 
                    // onChangeText={qtd => this.alterarQtdNumero(qtd)} 
                    onChangeText={this.alterarQtdNumero} 
                    style={{borderBottomWidth: 1, borderColor: "#CCC"}} 
                    keyboardType='numeric'/>
                <Text>{'\n'}</Text>
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                    style={{marginTop: 20}}
                />
                {/* <Text>{'\n\n'} Números gerados:  {this.state.numeros.join(', ')}</Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>            
        )
    }
}