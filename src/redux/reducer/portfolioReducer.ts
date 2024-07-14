import { getTotalValues } from "../../utils/helper"
import { ACTIONS, ACTIONS_SUFFIX } from "../constants"

const initialState: IPortfolioReducer = {
    isLoading: true,
    holdings: [],
    summary: undefined,
    errorMsg: ''
}

const portfolioReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case `${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.LOADING}`:
            return {
                ...initialState,
                isLoading: true
            }
        case `${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.SUCCESS}`:
            return {
                ...initialState,
                isLoading: false,
                holdings: action.data,
                summary: getTotalValues(action.data)
            }
        case `${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.ERROR}`:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'Couldn\'t fetch, swipe down to retry'
            }
        default: return state
    }
}

export default portfolioReducer