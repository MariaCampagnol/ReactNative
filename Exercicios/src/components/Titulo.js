import React, { Fragment } from "react";
import { Text } from "react-native";
import Style from "../styles/Style";

export default props => (
    <Fragment>
    {/* <> */}
        <Text style={Style.FontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    {/* </> */}
    </Fragment>
)