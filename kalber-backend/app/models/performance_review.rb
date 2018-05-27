# == Schema Information
#
# Table name: performance_reviews
#
#  id          :bigint(8)        not null, primary key
#  reviewee_id :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PerformanceReview < ApplicationRecord
  belongs_to :reviewee, :class_name => 'User'
  has_many :performance_reviews_users
  has_many :reviewers, through: :performance_reviews_users, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
