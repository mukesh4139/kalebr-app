class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :admin, :self_performance_review_id, :others_performance_review_ids,
             :scoped_review_id, :review_ids

  def self_performance_review_id
    object.self_performance_review.id if object.self_performance_review
  end

  def scoped_review_id
    if scope and object != scope
      review = object.reviews.find_by(reviewer_id: scope.id)
      review.nil? ? nil : review.id
    end
  end
end
