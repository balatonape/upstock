import { Button, StyleSheet, Text, View } from "react-native"
import { DEFAULT } from "../../constants/strings"
import { globalStyles } from "../../constants/globalStyles"
import normalize from "../../utils/normalize"
import { COLORS } from "../../constants/colors"

type ErrorViewType = {
    errMsg: string
    onRetry: ()=>void
}

export const ErrorView = (props: ErrorViewType) => {
    const {errMsg = DEFAULT.errMsg, onRetry} = props
    return (
        <View style={[globalStyles.flex_one, globalStyles.column_center, styles.gap]}>
            <Text style={globalStyles.secondary_text}>{errMsg}</Text>
            <Button color={COLORS.accent} title={DEFAULT.retry} onPress={onRetry}/>
        </View>
    )
}

const styles = StyleSheet.create({
    gap: {gap: normalize(16)},
})