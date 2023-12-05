import React, {useState} from 'react'
import { Text } from 'react-native'
import Style from '../../styles/Style'

import Filho from './Filho'
export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setTexto(texto)
        setNum(numero)
    }
    
    return (
        <>
            <Text style={Style.FontG}>{texto}{num}</Text>
            <Filho
                min={1} 
                max={60}
                funcao={exibirValor}
            />
        </>

    )
}