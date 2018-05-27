# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  firstname              :string
#  lastname               :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  admin                  :boolean          default(FALSE)
#

class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :admin, :self_performance_review_id, :others_performance_review_ids,
             :scoped_review_id, :review_ids

  def self_performance_review_id
    object.self_performance_review.id if object.self_performance_review
  end

  def scoped_review_id
    if scope and object != scope
      review = object.reviews.find_by(reviewer_id: scope.id)
      review.nil? ? nil : review.id
    end
  end
end
