class ApplicationController < ActionController::Base
  attr_reader :current_user
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  protected
  def authenticate_request!
    unless user_id_in_token?
      render json: { errors: ['Not Authenticated'] }
      return
    end
    @current_user = User.find(auth_token[:user_id])
  rescue JWT::VerificationError, JWT::DecideError
    render json: { errors: ['Not Authenticated'] }
  end

  private

  def http_token
    @http_token ||= if request.headers['Authorization'].present?
                      request.headers['Authorization'].split(' ').last
                    end
  end

  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end

  def user_id_in_token?
    http_token && auth_token && auth_token[:user_id].to_i
  end

  def record_not_found
    render json: {message: "This requested record is either deleted or does not exist"}, :status => 422
  end
end
