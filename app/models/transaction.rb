class Transaction < ApplicationRecord
    validates :ticker, :units, :price, :user_id, presence: true

    belongs_to :user



end
