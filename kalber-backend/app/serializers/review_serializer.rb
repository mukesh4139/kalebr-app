class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :feedback, :reviewer_id, :performance_review_id, :questions_options
end
