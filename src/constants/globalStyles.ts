import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import normalize from "../utils/normalize";

// For Repeatative/reusable styles
export const globalStyles = StyleSheet.create({
    flex_one: { flex: 1 },
    column_center: { justifyContent: 'center', alignItems: 'center' },
    row_space_bw: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    row_center: { flexDirection: 'row', alignItems: 'center' },
    divider: { borderBottomWidth: 0.5, borderColor: COLORS.divider },
    bold_text: { fontWeight: '700', color: COLORS.primary },
    bold_white: { fontWeight: '700', color: COLORS.white },
    bold_secondary: { fontWeight: '700', color: COLORS.secondary, fontSize: normalize(13) },
    secondary_text: { color: COLORS.secondary, fontSize: normalize(11) },
    primary_white: { color: COLORS.white, fontSize: normalize(12) },
    secondary_white: { color: COLORS.white, fontSize: normalize(11) }
})