import React from 'react'
import { View, Text } from 'react-native'
import Style from '../styles/Style'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={
                    usuario 
                    && Object.keys(usuario).length !== 0 
                    && usuario.nome
                    && usuario.email}>
                <Text style={Style.FontG}>Usuario Logado</Text>
                <Text style={Style.FontG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </> 
    )
}