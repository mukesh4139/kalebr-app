class PerformanceReview < ApplicationRecord
  belongs_to :reviewee, :class_name => 'User'
  has_many :performance_reviews_users
  has_many :reviewers, through: :performance_reviews_users
  has_many :reviews
end
