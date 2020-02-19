// 2a9d3c648d314df4b7cde8b542c323c8

export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: 'https://newsapi.org/v2/everything?q=stock&pageSize=7&apiKey=159d8c59b37c449ba93d7a1483336737'
    })
}