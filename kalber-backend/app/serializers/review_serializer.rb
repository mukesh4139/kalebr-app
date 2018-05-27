class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :feedback, :reviewer_id, :performance_review_id, :questions_options_ids

  def questions_options_ids
    object.questions_options.ids
  end
end
