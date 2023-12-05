import React from 'react'
import { StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={Style.FlexV4}>
            <View style={Style.V0}/>
            <View style={Style.V1}/>
            <View style={Style.V2}/>
        </View>
    )
}

const Style=StyleSheet.create({
    FlexV4:{
        width: 100,
        flexGrow: 1,
        backgroundColor: '#AAA',
    },
    V0: {
        backgroundColor: '#447791',
        height: 0,
    },
    V1: {
        backgroundColor: '#4b0082',
        flexGrow: 1
    },
    V2: {
        backgroundColor: '#0a3876',
        flexGrow: 1
    }
})