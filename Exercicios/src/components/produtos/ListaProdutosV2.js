import React from 'react'
import { FlatList, Text } from 'react-native'
import Style from '../../styles/Style'

import Produtos from './Produtos'

export default props => {
    const produtoRender = ({item: p}) => { return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>}

    return (
        <>
            <Text style={Style.FontG}>Lista de Produtos V2</Text>
            <FlatList 
                data={Produtos}
                keyExtractor={i => i.id}
                renderItem={produtoRender}
            />
        </>
    )
}