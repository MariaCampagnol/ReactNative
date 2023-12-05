import React from 'react'
import { View, Text } from 'react-native'
import Style from '../../styles/Style'

import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
            return <Text key={p.id}>{p.id}) {p.nome} tem preço R$ {p.preco}</Text>
        })  
    }

    return (
        <>
            <Text style={Style.FontG}>Lista de Produtos </Text>
            {obterLista()}
        </>
    )
}