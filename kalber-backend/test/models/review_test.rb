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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
