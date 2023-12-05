import React, { useState } from "react";
import { Text, Button } from "react-native";
import Style from "../styles/Style";

export default ({ inicial = 0, passos = 1 }) => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passos)
    const dec = () => setNumero(numero - passos)

    return (
        <>
            <Text style={Style.FontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}