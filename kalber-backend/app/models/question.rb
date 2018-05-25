class Question < ApplicationRecord
  has_many :options, dependent: :destroy

  accepts_nested_attributes_for :options, allow_destroy: true, reject_if: proc {|attribute| !attribute.present?}
end
