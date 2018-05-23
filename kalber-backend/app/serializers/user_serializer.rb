class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :admin
end
