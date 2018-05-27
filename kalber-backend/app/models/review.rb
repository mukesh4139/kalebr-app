# == Schema Information
#
# Table name: reviews
#
#  id                    :bigint(8)        not null, primary key
#  feedback              :text
#  performance_review_id :bigint(8)
#  reviewer_id           :bigint(8)
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Review < ApplicationRecord
  belongs_to :performance_review
  belongs_to :reviewer, class_name: 'User'
  has_many :questions_options, dependent: :destroy

  accepts_nested_attributes_for :questions_options, reject_if: proc {|attribute| !attribute.present?}
end
