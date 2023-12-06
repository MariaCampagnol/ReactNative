import React from "react";
import { 
    StyleSheet ,
    Text,
    Dimensions,
    TouchableHighlight
} from "react-native";

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: "#F0F0F0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    operationButton: {
        backgroundColor: "#FA8231",
        color: "#FFF"
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }

})

export default props => {
    const stylesButton = [style.button]

    if (props.double) stylesButton.push(style.buttonDouble)
    if (props.triple) stylesButton.push(style.buttonTriple)
    if (props.operation) stylesButton.push(style.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}