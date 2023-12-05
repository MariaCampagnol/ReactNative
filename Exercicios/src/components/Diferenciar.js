import React from 'react'
import { View, Text, Platform } from 'react-native'
import Style from '../styles/Style'

export default props => {
    if(Platform.OS === 'android') {
        return <Text style={Style.FontG}>Android</Text>
    }else if(Platform.OS === 'ios') {
        return <Text style={Style.FontG}>IOS</Text>
    }else {
        return <Text style={Style.FontG}>{Platform.OS}</Text>
    }
}