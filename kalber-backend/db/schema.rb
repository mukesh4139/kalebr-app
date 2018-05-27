# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180526185829) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "options", force: :cascade do |t|
    t.text "statement"
    t.bigint "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_options_on_question_id"
  end

  create_table "performance_reviews", force: :cascade do |t|
    t.bigint "reviewee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reviewee_id"], name: "index_performance_reviews_on_reviewee_id"
  end

  create_table "performance_reviews_users", force: :cascade do |t|
    t.bigint "performance_review_id"
    t.bigint "reviewer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["performance_review_id"], name: "index_performance_reviews_users_on_performance_review_id"
    t.index ["reviewer_id"], name: "index_performance_reviews_users_on_reviewer_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "statement"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions_options", force: :cascade do |t|
    t.bigint "review_id"
    t.bigint "question_id"
    t.bigint "option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["option_id"], name: "index_questions_options_on_option_id"
    t.index ["question_id"], name: "index_questions_options_on_question_id"
    t.index ["review_id"], name: "index_questions_options_on_review_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "feedback"
    t.bigint "performance_review_id"
    t.bigint "reviewer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["performance_review_id"], name: "index_reviews_on_performance_review_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "options", "questions"
  add_foreign_key "performance_reviews", "users", column: "reviewee_id"
  add_foreign_key "performance_reviews_users", "performance_reviews"
  add_foreign_key "performance_reviews_users", "users", column: "reviewer_id"
  add_foreign_key "questions_options", "options"
  add_foreign_key "questions_options", "questions"
  add_foreign_key "questions_options", "reviews"
  add_foreign_key "reviews", "performance_reviews"
  add_foreign_key "reviews", "users", column: "reviewer_id"
end
