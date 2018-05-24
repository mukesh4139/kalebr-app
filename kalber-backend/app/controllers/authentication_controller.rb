class AuthenticationController < ApplicationController
  before_action :authenticate_request!, only: [:signed_in_user]
  def user_sign_in
    user = User.find_for_database_authentication(email: params[:email])
    if user and user.valid_password?(params[:password])
      render json: payload(user)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

  def signed_in_user
    render json: {user: @current_user}
  end

  private

  def payload(user)
    return nil unless user and user.id
    {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        user: {id: user.id, email: user.email}
    }
  end
end
