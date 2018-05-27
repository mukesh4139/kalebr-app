class QuestionsOption < ApplicationRecord
  belongs_to :review
  belongs_to :question
  belongs_to :option
end
