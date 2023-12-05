import React from "react";
import { Text } from "react-native";
import Style from "../styles/Style";

export default (props) => (
    <Text style={Style.FontG}>
        O valor {props.max} é maior que o valor {props['min']}!!
    </Text>
)