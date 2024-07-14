import axios from "axios"
import { END_POINT } from "../constants/endPoints"
import { sendActionAndDispatch } from "../redux/actions/actions"
import { ACTIONS, ACTIONS_SUFFIX } from "../redux/constants"

export const getPortfolioHoldings = async () => {
    sendActionAndDispatch(`${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.LOADING}`)

    // can use async await or a promise with .then and catch to send appropriate actions
    const response = await axios.get(END_POINT.userHoldings)

    console.log('LOGS:: api response', response.data.data);
    try {
        sendActionAndDispatch(`${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.SUCCESS}`, response.data.data.userHolding)
    } catch (error) {
        sendActionAndDispatch(`${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.ERROR}`)
    }

}