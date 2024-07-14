
/** Keeping the strings seperate helps with the language support. 
 * Any time we want to support multiple language move only the values to en.json, hn.json etc
 * use single function like ltp = i18n.t(portfolio.ltp) will be able to support language  */
export const PORTFOLIO = {
    ltp: 'LTP:',
    p_l: 'P/L:',
}

export const SUMMARY = {
    current_value: 'Current value',
    total_investment: 'Total investment',
    todays_p_and_l: 'Today\'s Profit & Loss',
    p_and_l: 'Profit & Loss',
}

export const DEFAULT = {
    rupees: '₹',
    title: 'Upstock Holding',
    retry: 'Retry',
    errMsg: 'Something went wrong'
}