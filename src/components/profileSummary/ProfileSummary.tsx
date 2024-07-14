import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "../../redux/store"
import { useState } from "react"
import { DEFAULT, SUMMARY } from "../../constants/strings"
import { RowItem } from "../custom/RowItem"
import { COLORS } from "../../constants/colors"
import { roundTo2 } from "../../utils/helper"
import normalize from "../../utils/normalize"

export const ProfileSummary = () => {

    // Flag to expand and collapse 
    const [isExpanded, setExpandedFlag] = useState(false)

    const summaryValues = useSelector((state) => state.portfolioReducer?.summary)!!

    const toggleSummary = () => {
        // Toggle the flag 
        setExpandedFlag(prevValue => !prevValue)
    }

    const ExpandedView = () => (
        <View style={styles.expanded_container}>
            <RowItem name={SUMMARY.current_value} value={`${DEFAULT.rupees} ${roundTo2(summaryValues.currentValueTotal)}`} />
            <RowItem name={SUMMARY.total_investment} value={`${DEFAULT.rupees} ${roundTo2(summaryValues.totalInvestment)}`} />
            <RowItem name={SUMMARY.todays_p_and_l} value={`${DEFAULT.rupees} ${roundTo2(summaryValues.todayPnL)}`} />
        </View>
    )

    return !summaryValues ? null : (
        <TouchableOpacity onPress={toggleSummary}>
            <View style={styles.parent}>
                {isExpanded ? <ExpandedView /> : null}
                <RowItem name={SUMMARY.p_and_l} value={`${DEFAULT.rupees} ${roundTo2(summaryValues.totalPnL)}`} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    parent: { padding: normalize(16), backgroundColor: COLORS.summaryBG },
    expanded_container: { gap: normalize(8), paddingBottom: normalize(24) }
})