const url = new URL(
    "https://api.worldtradingdata.com/api/v1/history_multi_single_day"
);

let params = {
    "symbol": "SNAP,TWTR",
    "date": "2019-01-02",
    "api_token": "cbLGhbaMwB0VjD2wOVYMBXmLZwAH1wKvzMujsbe3xJDTO8vuPvH7x3JD23z1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    .then(json => console.log(json));


// API_token: cbLGhbaMwB0VjD2wOVYMBXmLZwAH1wKvzMujsbe3xJDTO8vuPvH7x3JD23z1

export const fetchStockPrice = queryObject => {
    const {  symbol, api_key } = queryObject;
    api_key = 'cbLGhbaMwB0VjD2wOVYMBXmLZwAH1wKvzMujsbe3xJDTO8vuPvH7x3JD23z1';
    return $.ajax({
    method: 'GET',
    url: `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_key=${api_key}`
    });
};

