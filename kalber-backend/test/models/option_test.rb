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

require 'test_helper'

class OptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
