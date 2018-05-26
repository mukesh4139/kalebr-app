class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :admin, :self_performance_review_id, :others_performance_review_ids

  def self_performance_review_id
    object.self_performance_review.id if object.self_performance_review
  end
end
