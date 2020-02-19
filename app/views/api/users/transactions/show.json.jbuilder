json.set! @transaction.id do
    json.extract! @transaction, :id, :ticker, :units, :price, :user_id
end