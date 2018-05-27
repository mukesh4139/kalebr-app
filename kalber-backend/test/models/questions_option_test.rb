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

require 'test_helper'

class QuestionsOptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
