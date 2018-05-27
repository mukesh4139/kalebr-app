# == Schema Information
#
# Table name: questions_options
#
#  id          :bigint(8)        not null, primary key
#  review_id   :bigint(8)
#  question_id :bigint(8)
#  option_id   :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionsOptionSerializer < ActiveModel::Serializer
  attributes :id, :review_id, :question_id, :option_id
end
