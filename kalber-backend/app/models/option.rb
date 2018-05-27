# == Schema Information
#
# Table name: options
#
#  id          :bigint(8)        not null, primary key
#  statement   :text
#  question_id :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Option < ApplicationRecord
  belongs_to :question
  has_many :questions_options

  validates_presence_of :statement
  validates_presence_of :question
end
