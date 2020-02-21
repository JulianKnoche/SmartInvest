# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

SmartInvest - (https://smart-invest.herokuapp.com/)

SmartInvest is an investing app built using Ruby on Rails and React-redux. The idea was to imitate the robinhood website (www.robinhood.com).

Once you create an account on this app, you will be redirect to your homepage where you'll be able to see a news fees. The news feed is coming from the NewsAPI and has been filtered to only news articles related to stocks.

You will also be able to see your buying power and the history of all of your transactions.

The app includes a stock index page with all stocks from the S&P 500. I have seeded the database with this data by using a csv file as a source.

Each company in the Stock Index table is a link that takes you to a Stock show page. The stock show page makes an ajax call to the World Trading Data API to retrieve the most recent stock price information about that particular stock. I am then filtering the data to only store dates and closing prices about that particular stock in my redux state. Finally, the stock show React Presentational Component alters the data into an array of JS objects that can be feeded into my graph. The graph is made using 'Recharts', a charting library built with React.

The stock show page also displays a form to buy the stock. It takes in one input (the number of shares the user would like to buy) the current market price is the most recent price received from the World Trading Data API and used to calculate the overall cost of the transaction. On Submit, the buying power of the user changes accordingly.

Once the user goes back to his homepage, he will see the list of stocks that he bought, the price and his buying power at that particular time.

## Sign Up Page

<img width="697" alt="Sign Up Image" src="https://user-images.githubusercontent.com/49321618/75047982-c8909400-5495-11ea-9b44-9de9a1049340.png">

## Stock Show Page
<img width="697" alt="Stock Show Image" src="https://user-images.githubusercontent.com/49321618/75047999-cd554800-5495-11ea-83c6-5752482f39eb.png"/>
