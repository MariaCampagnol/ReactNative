import React from 'react'
import { View, Text } from 'react-native'
import Style from '../../styles/Style'

export default props => {
    return (
        <>
            <Text style={Style.FontG}>
                {props.a}
            </Text>
            <Text style={Style.FontG}>
                {props.b}
            </Text>            
        </>
    )
}