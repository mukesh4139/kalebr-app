# == Schema Information
#
# Table name: performance_reviews_users
#
#  id                    :bigint(8)        not null, primary key
#  performance_review_id :bigint(8)
#  reviewer_id           :bigint(8)
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class PerformanceReviewsUser < ApplicationRecord
  belongs_to :performance_review
  belongs_to :reviewer, class_name: 'User'
end
