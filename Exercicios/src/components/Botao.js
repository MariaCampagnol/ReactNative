import React, { Fragment } from "react";
import { Button, Text } from "react-native";

export default props => {
    function Executar(){
        console.warn("Executou #01!!!")
    }

    return (
        <Fragment>
            <Button 
                title="Executar #01" 
                onPress={Executar}
            ></Button>
            <Text>{'\n'}</Text>
            <Button 
                title="Executar #02" 
                onPress={function (){
                    console.warn("Executou #02!!!")
                }}
            ></Button>
            <Text>{'\n'}</Text>
            <Button 
                title="Executar #03" 
                onPress={() =>  console.warn("Executou #03!!!")}
            ></Button>
        </Fragment>
    )
}