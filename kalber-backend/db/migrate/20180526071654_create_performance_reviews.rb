class CreatePerformanceReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :performance_reviews do |t|
      t.references :reviewee, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
