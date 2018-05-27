require 'rails_helper'

RSpec.describe User, type: :model do

  describe User do
    it { is_expected.to validate_presence_of(:firstname) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:password) }
  end

  describe "creation" do
    it "should have one user created after being created" do
      User.create(firstname: 'mukesh', lastname: 'chaudhary', email: 'mukesh.chaudhary@example.com', password: 'kalebr')
      expect(User.count).to eq(1)
    end

    it "should accept role as admin" do
      user = User.create(firstname: 'mukesh', lastname: 'chaudhary',
                         email: 'mukesh.chaudhary@example.com', password: 'kalebr', admin: true)
      expect(user.admin).to eq(true)
    end

    it "user create without admin attribute should be non admin user" do
      user = User.create(firstname: 'mukesh', lastname: 'chaudhary',
                         email: 'mukesh.chaudhary@example.com', password: 'kalebr')
      expect(user.admin).to eq(false)
    end
  end

  describe "creation without mandatory parameters" do
    it "should invalidate creation of user without email" do
      user = User.create(firstname: 'mukesh', lastname: 'chaudhary', password: 'kalebr')
      expect(user.valid?).to eq(false)
    end

    it "should invalidate creation of user without firstname" do
      user = User.create( lastname: 'chaudhary', email: 'mukesh.chaudhary@example.com', password: 'kalebr')
      expect(user.valid?).to eq(false)
    end

    it "should invalidate creation of user without password" do
      user = User.create(firstname: 'mukesh', lastname: 'chaudhary', email: 'mukesh.chaudhary@example.com')
      expect(user.valid?).to eq(false)
    end
  end
end
