class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_request!, only: [:create, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: {message: "User could not be save due to #{@user.errors.full_messages}"}, status: 422
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: {message: "User could not be updated due to #{@user.errors.full_messages}"}, status: 422
    end
  end

  def destroy
    if @user.destroy
      render json: {message: "User deleted successfully"}, status: :ok
    else
      render json: {message: "User could not be deleted"}, status: 422
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    if params[:user][:password] == ''
      params[:user][:password] = nil
    end
    params.require(:user).permit(:firstname, :lastname, :email, :password)
  end
end
