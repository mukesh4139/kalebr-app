class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :feedback
      t.references :performance_review, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
