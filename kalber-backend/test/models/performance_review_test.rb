# == Schema Information
#
# Table name: performance_reviews
#
#  id          :bigint(8)        not null, primary key
#  reviewee_id :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PerformanceReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
