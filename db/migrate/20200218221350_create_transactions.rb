class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :ticker
      t.integer :units
      t.float :price
      t.integer :user_id

      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
