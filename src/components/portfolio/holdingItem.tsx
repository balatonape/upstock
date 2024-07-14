import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TwoText } from "../custom/TwoText"
import { DEFAULT, PORTFOLIO } from "../../constants/strings"
import { getPandLforItem, roundTo2 } from "../../utils/helper"
import { globalStyles } from "../../constants/globalStyles"
import normalize from "../../utils/normalize"

export const HoldingItem = ({ item }: { item: IHoldingItem }) => {
    const { pnl } = getPandLforItem(item)


    return (
        <View key={item.symbol} style={styles.parent}>
            <View style={styles.container}>
                <View style={styles.row_style}>
                    <Text style={globalStyles.bold_text}>{item.symbol}</Text>
                    <TwoText name={PORTFOLIO.ltp} value={`${DEFAULT.rupees} ${roundTo2(item.ltp)}`} />
                </View>
                <View style={styles.row_style}>
                    <Text style={globalStyles.secondary_text}>{item.quantity}</Text>
                    <TwoText name={PORTFOLIO.p_l} value={`${DEFAULT.rupees} ${roundTo2(pnl)}`} />
                </View>

            </View>
            <View style={globalStyles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    parent: { marginHorizontal: normalize(16) },
    container: { gap: normalize(4), paddingVertical: normalize(16), },
    row_style: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
})