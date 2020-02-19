class Watchlist < ApplicationRecord
    validates :ticker, :user_id, presence: true
    validates :ticker, uniqueness: { scope: [:ticker, :user_id] }

    belongs_to :user
end
