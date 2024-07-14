import { useEffect } from "react"
import { View } from "react-native"
import { getPortfolioHoldings } from "../network/apis"
import { useSelector } from "../redux/store"
import { HoldingList } from "../components/portfolio/holdingList"
import { ErrorView } from "../components/custom/ErrorView"
import { globalStyles } from "../constants/globalStyles"

const PortfolioScreen = () => {

    const errorMsg = useSelector((state) => state.portfolioReducer?.errorMsg)

    useEffect(() => {
        // Call API on first load
        getPortfolioHoldings()
    }, [])

    // for swipe to refresh or retry button click when errorMsg or want to load fresh data
    const refresh = () => { getPortfolioHoldings() }

    return (
        <View style={[globalStyles.flex_one]}>
            {
                !errorMsg ?
                    <HoldingList pullToRefresh={refresh} />
                    : <ErrorView onRetry={refresh} errMsg={errorMsg} />
            }

        </View>
    )
}

export default PortfolioScreen