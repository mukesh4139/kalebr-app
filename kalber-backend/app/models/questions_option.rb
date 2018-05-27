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

class QuestionsOption < ApplicationRecord
  belongs_to :review
  belongs_to :question
  belongs_to :option
end
