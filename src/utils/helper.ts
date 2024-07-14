
export const getPandLforItem = (item: IHoldingItem) => {
    const { ltp = 0, quantity = 0, avgPrice = 0 } = item

    const currentValue = ltp * quantity
    const investmentValue = avgPrice * quantity
    const pnl = currentValue - investmentValue
    return {
        currentValue,
        investmentValue,
        pnl
    }
}

export const getTotalValues = (items: IHoldingItem[]): IProfileSummary => {
    let totalValues = items.reduce((aggregateSum, item) => {
        const { ltp = 0, quantity = 0, close = 0 } = item
        const { currentValue,
            investmentValue,
            pnl } = getPandLforItem(item)
        const todayPnL = (close - ltp) * quantity
        return {
            currentValueTotal: aggregateSum.currentValueTotal + currentValue,
            totalInvestment: aggregateSum.totalInvestment + investmentValue,
            totalPnL: aggregateSum.totalPnL + pnl,
            todayPnL: aggregateSum.todayPnL + todayPnL,
        }
    }, {
        currentValueTotal: 0,
        totalInvestment: 0,
        totalPnL: 0,
        todayPnL: 0,
    })


    return totalValues
}


export const roundTo2 = (value: number) => {
    return Math.round(value * 100) / 100;
};