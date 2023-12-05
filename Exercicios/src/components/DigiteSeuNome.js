import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from '../styles/Style'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome...'
                value={null}
                onChangeText={nome => setNome(nome)}
            /> 
        </View>
    )
}