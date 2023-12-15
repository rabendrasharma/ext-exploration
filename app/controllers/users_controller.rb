class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
    if user.save
      render json: user
    else
      format.json { render json: { success: false, errors: user.errors } }
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
      render json: user
    else
      format.json { render json: { success: false, errors: user.errors } }
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
      render json: {status: 200}
    else
      format.json { render json: { success: false, errors: user.errors } }
    end
  end
end
