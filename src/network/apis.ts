import axios from 'axios';
import {END_POINT} from '../constants/endPoints';
import {sendActionAndDispatch} from '../redux/actions/actions';
import {ACTIONS, ACTIONS_SUFFIX} from '../redux/constants';

export const getPortfolioHoldings = async () => {
  sendActionAndDispatch(`${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.LOADING}`);

  // we can use async await or a promise with .then and catch to send appropriate actions
  try {
    const response = await axios.get(END_POINT.userHoldings);

    console.log('LOGS:: api response', response.data.data);
    if (response.data?.data?.userHolding)
      sendActionAndDispatch(
        `${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.SUCCESS}`,
        response.data.data.userHolding,
      );
    else throw new Error('Failed or empty data');
  } catch (error) {
    sendActionAndDispatch(`${ACTIONS.GET_PORTFOLIO}${ACTIONS_SUFFIX.ERROR}`);
  }
};
