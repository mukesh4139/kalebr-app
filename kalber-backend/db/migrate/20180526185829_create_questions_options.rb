class CreateQuestionsOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions_options do |t|
      t.references :review, foreign_key: true
      t.references :question, foreign_key: true
      t.references :option, foreign_key: true

      t.timestamps
    end
  end
end
