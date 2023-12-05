import React from "react";
import { Text } from "react-native";
import Style from "../styles/Style";

export default function Comp(){
    return <Text style={Style.FontM}> Comp #Oficial </Text>
}
export function Comp1(){ 
    return <Text style={Style.FontM}> Comp #01 </Text>
}
export function Comp2(){
    return <Text style={Style.FontM}> Comp #02 </Text>
}

// OUTRA FORMA DE EXPORTAR O COMPONENTE
// export { Comp2, Comp3}
// export default Comp