import React from 'react'
import { View, Text } from 'react-native'
import Style from '../../styles/Style'
import Membro from './Membro'

export default props => {
    return (
        <>
            <Text style={Style.FontG}>Membros da Família</Text>
            {props.children}
        </>
    )
}