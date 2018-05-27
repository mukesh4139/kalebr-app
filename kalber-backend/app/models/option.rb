class Option < ApplicationRecord
  belongs_to :question
  has_many :questions_options, dependent: :destroy
end
