import React from "react"
import {  Text, View } from "react-native"
import { globalStyles } from "../../constants/globalStyles"
import { ITwoText } from "./TwoText"


export const RowItem = (info: ITwoText) => {
    return <View style={globalStyles.row_space_bw}>
        <Text style={globalStyles.bold_white} >{info.name}</Text>
        <Text style={globalStyles.primary_white} >{info.value}</Text>
    </View>
}