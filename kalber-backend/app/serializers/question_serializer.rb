# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  statement  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :statement
  has_many :options
end
