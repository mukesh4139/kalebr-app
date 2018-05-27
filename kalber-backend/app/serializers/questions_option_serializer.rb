class QuestionsOptionSerializer < ActiveModel::Serializer
  attributes :id, :review_id, :question_id, :option_id
end
