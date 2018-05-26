class Review < ApplicationRecord
  belongs_to :performance_review
  belongs_to :user
end
