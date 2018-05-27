require 'rails_helper'

RSpec.describe AuthenticationController, type: :controller do
  before(:each) do
    @user = User.create({ firstname: 'Anil', lastname: 'Kumar', email: 'anil.kumar@example.com', password: 'example' })
  end

  describe "user sign in" do
    it "allows user to sign in with valid password" do
      response = post :user_sign_in, params: { email: @user.email, password: @user.password }
      expect(response).to have_http_status(:ok)
    end

    it "do not allows user to sign in with invalid password" do
      response = post :user_sign_in, params: { email: @user.email, password: 'invalid' }
      expect(response).to have_http_status(:unauthorized)
    end
  end
end
