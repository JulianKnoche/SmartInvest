class Api::TransactionsController < ApplicationController

    def create
      @transaction = Transaction.new(transaction_params)
      @user = User.find(params[:user_id])
      
      if @transaction.save

        @user.buying_power -= (@transaction.price*@transaction.units)
        @user.save
        render "api/users/transactions/show";
      else
        render json: @transaction.errors.full_messages, status: 401
      end
    end

    def index
      # debugger
      @transactions = User.find(params[:user_id]).transactions
      # debugger
      render json: @transactions

      # render "api/users/transactions/index"
    end

    def transaction_params
      params.require(:transactionData).permit(:ticker, :units, :price, :user_id)
    end
end