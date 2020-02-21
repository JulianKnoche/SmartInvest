# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Company.destroy_all

require 'csv'
myfile = open('app/assets/NYSETICKERS.csv')

data = CSV.read(myfile)
data[1..-1].each do |row|

# ticker_list = data.map { |el| el[0] }
# ticker_list[1..-1].each do |ticker|
    Company.create!(ticker: row[0], company_name: row[1])
end



User.create!(first_name: "Tommy", last_name: "Duek", email: "tommy@gmail.com", password: "hunter1234", buying_power: 50000)
User.create!(first_name: "Julian", last_name: "K", email: "julian@gmail.com", password: "hunter1234", buying_power: 50000)
User.create!(first_name: "Phong", last_name: "Ngo", email: "phong@gmail.com", password: "hunter1234", buying_power: 50000)
User.create!(first_name: "Danny", last_name: "Yoo", email: "danny@gmail.com", password: "hunter1234", buying_power: 50000)
