class PerformanceReviewsUser < ApplicationRecord
  belongs_to :performance_review
  belongs_to :reviewer, class_name: 'User'
  has_many :reviews
end
