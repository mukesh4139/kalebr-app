class CreatePerformanceReviewsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :performance_reviews_users do |t|
      t.references :performance_review, foreign_key: true
      t.references :reviewer, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
