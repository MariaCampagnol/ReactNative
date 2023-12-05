import React from 'react'
import { StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={Style.FlexV1}>
            <Quadrado />
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#4b0082'/>
        </View>
    )
}

const Style=StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#AAA'
    }
})