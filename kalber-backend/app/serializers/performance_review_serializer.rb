class PerformanceReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviewee_id, :reviewer_ids
  # has_many :reviewers, include: false
end
