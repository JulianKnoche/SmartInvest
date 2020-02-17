// 2a9d3c648d314df4b7cde8b542c323c8

export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2a9d3c648d314df4b7cde8b542c323c8'
    })
}