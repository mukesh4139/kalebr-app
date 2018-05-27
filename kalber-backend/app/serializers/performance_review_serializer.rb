# == Schema Information
#
# Table name: performance_reviews
#
#  id          :bigint(8)        not null, primary key
#  reviewee_id :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PerformanceReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviewee_id, :reviewer_ids
  # has_many :reviewers, include: false
end
