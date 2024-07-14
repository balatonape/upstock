import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"
import { globalStyles } from "../../constants/globalStyles"
import normalize from "../../utils/normalize"

export interface ITwoText {
    name: string
    nameStyle?: StyleProp<TextStyle>
    value: string | number
    valueStyle?:  StyleProp<TextStyle>
}

export const TwoText = (info: ITwoText) => {
    return <View style={styles.parent}>
        <Text style={[globalStyles.secondary_text, info.nameStyle]}>{info.name}</Text>
        <Text style={[globalStyles.bold_secondary, info.valueStyle]}>{info.value}</Text>
    </View>
}

const styles = StyleSheet.create({
    parent: {flexDirection:'row', alignItems:'center', gap: normalize(4)}
})