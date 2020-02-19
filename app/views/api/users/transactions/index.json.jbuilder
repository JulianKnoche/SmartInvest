@transactions.each do |transaction|
    json.extract! transaction, :id, :ticker, :units, :price
end