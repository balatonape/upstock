import React from "react"
import { FlatList } from "react-native"
import { HoldingItem } from "./holdingItem"
import { useSelector } from "../../redux/store"
import { Loader } from "../custom/Loader"

type HoldingListProps = {
    pullToRefresh: () => void
}

export const HoldingList = (props: HoldingListProps) => {

    const holdings = useSelector((state) => state.portfolioReducer?.holdings)
    const isLoading = useSelector((state) => state.portfolioReducer?.isLoading)


    const renderItem = ({ item }: { item: IHoldingItem }) => <HoldingItem item={item} />

    return !isLoading ? (
        <FlatList
            data={holdings}
            keyExtractor={(item) => item.symbol}
            renderItem={renderItem}
            refreshing={isLoading}
            onRefresh={props.pullToRefresh}
        />) : <Loader />
}