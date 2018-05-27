# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  statement  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  has_many :options, dependent: :destroy
  has_many :questions_options, dependent: :destroy

  validates_presence_of :statement

  accepts_nested_attributes_for :options, allow_destroy: true, reject_if: proc {|attribute| !attribute.present?}
end
