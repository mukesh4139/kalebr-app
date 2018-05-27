class Review < ApplicationRecord
  belongs_to :performance_review
  belongs_to :reviewer, class_name: 'User'
  has_many :questions_options

  accepts_nested_attributes_for :questions_options, reject_if: proc {|attribute| !attribute.present?}
end
