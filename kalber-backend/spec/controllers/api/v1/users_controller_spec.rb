require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  before(:each) do
    users = [
        { firstname: 'Admin', lastname: 'Kalebr', email: 'admin.kalebr@example.com', password: 'kalebr', admin: true },
        { firstname: 'Anil', lastname: 'Kumar', email: 'anil.kumar@example.com', password: 'example' },
        { firstname: 'Shyam', lastname: 'Kumar', email: 'shyam.kumar@example.com', password: 'example' },
        { firstname: 'Gita', lastname: 'Kumari', email: 'gita.kumari@example.com', password: 'example' },
        { firstname: 'Sita', lastname: 'Kumari', email: 'sita.kumari@example.com', password: 'example' }
    ]
    User.create!(users)

    @user = User.find_by(admin: true)
    @token = JsonWebToken.encode({user_id: @user.id})
    @auth_token = 'Bearer ' + @token
  end

  describe "GET #index" do
    it "should return an array of all users" do
      get :index
      expect((:users).length).to eq(5)
    end
  end

  describe "GET #show" do
    it "should return the requested user" do
      user = User.first
      get :show, params: {id: user.id}
      expect(assigns(:user)).to eq(user)
    end
  end

  describe "POST create" do
    context "with valid attributes" do
      it "creates a new user" do
        expect {
          request.headers['Authorization'] = @auth_token
          post :create, params: { user: {firstname: 'ram', lastname: 'kumar', email: 'ram.kumar@example.com', password: 'example'}}
        }.to change(User, :count).by(1)
      end
    end
  end
end
