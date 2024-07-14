interface IPortfolioReducer {
    isLoading: boolean
    holdings: IHoldingItem[]
    summary?: IProfileSummary
    errorMsg: string
}

interface IHoldingItem {
    symbol: string
    quantity: number
    ltp: number
    avgPrice: number
    close: number
}

interface IProfileAction {
    type: string
    data: IHoldingItem[]
}

type IAction = IProfileAction

interface IProfileSummary {
    currentValueTotal: number
    totalInvestment: number
    totalPnL: number
    todayPnL: number
}
