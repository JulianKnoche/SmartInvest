import * as NewsAPIUtil from './../util/news_api_util';

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_SPECIFIC_NEWS = "RECEIVE_SPECIFIC_NEWS";

const receiveNews = news => ({
    type: RECEIVE_NEWS,
    news
})

const receiveSpecificNews = news => ({
    type: RECEIVE_SPECIFIC_NEWS,
    news
})

export const getNews = () => dispatch => {
    return (
        NewsAPIUtil.fetchNews().then(
            news => dispatch(receiveNews(news))
        )
    )
};

export const getSpecificNews = ticker => dispatch => {
    return (
        NewsAPIUtil.fetchNewsStock(ticker).then(
            news => dispatch(receiveSpecificNews(news))
        )
    )
};