import LottieView from "lottie-react-native"
import { StyleSheet, View } from "react-native"
import { globalStyles } from "../../constants/globalStyles";

export const Loader = () => {
    return (
        <View style={[globalStyles.flex_one, globalStyles.column_center]}>
            <LottieView
                source={require('../../assets/lottie/loader.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },
});