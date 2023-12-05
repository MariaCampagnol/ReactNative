import React from 'react'
import { View, Text } from 'react-native'
import Style from '../styles/Style'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Style.FontG}>O resultado é:</Text>
            {
                num % 2 === 0 
                    ? <Text style={Style.FontG}> Par </Text> 
                    : <Text style={Style.FontG}> Ímpar </Text>}
        </View>
    )
}