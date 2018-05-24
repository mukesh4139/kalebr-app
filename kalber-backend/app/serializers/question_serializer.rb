class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :statement
  has_many :options
end
