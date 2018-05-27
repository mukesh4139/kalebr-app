# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  firstname              :string
#  lastname               :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  admin                  :boolean          default(FALSE)
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :firstname, message: 'firstname is required'

  has_one :self_performance_review, class_name: 'PerformanceReview', foreign_key: :reviewee_id, dependent: :destroy
  has_many :reviews, through: :self_performance_review

  has_many :performance_reviews_users, foreign_key: :reviewer_id, dependent: :destroy, dependent: :destroy
  has_many :others_performance_reviews, through: :performance_reviews_users, source: :performance_review
end
