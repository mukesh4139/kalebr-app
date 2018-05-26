class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :firstname, message: 'firstname is required'

  has_one :self_performance_review, class_name: 'PerformanceReview', foreign_key: :reviewee_id
  has_many :reviews, through: :self_performance_review

  has_many :performance_reviews_users, foreign_key: :reviewer_id, dependent: :destroy
  has_many :others_performance_reviews, through: :performance_reviews_users, source: :performance_review
end
