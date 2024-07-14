import { Provider } from "react-redux"
import store from "./redux/store"
import PortfolioScreen from "./screens/portfolio"
import { ProfileSummary } from "./components/profileSummary/ProfileSummary"
import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "./constants/colors"
import { globalStyles } from "./constants/globalStyles"
import { DEFAULT } from "./constants/strings"
import normalize from "./utils/normalize"

const AppMain = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                {/* Below title can be part of navigation Screen name, if using navigation component with Route names */}
                <Text style={[globalStyles.bold_white, styles.title]}>{DEFAULT.title}</Text>
                <PortfolioScreen />

                {/* Below can be reusable view if we need to show profile summary in other screen also, 
                if not we can move this block in portfolio screen */}
                <ProfileSummary />
            </View>
        </Provider>
    )
}

export default AppMain

const styles = StyleSheet.create({
    container: { flexDirection: 'column', justifyContent:'center', flex:1 },
    title: {padding: normalize(16), backgroundColor: COLORS.accent}
})