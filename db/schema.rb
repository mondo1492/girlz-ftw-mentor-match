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

ActiveRecord::Schema.define(version: 20171031230326) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mentees", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "approved", default: false, null: false
    t.boolean "status", default: false, null: false
    t.integer "age", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone"
    t.string "facebook", null: false
    t.string "email", null: false
    t.string "high_school"
    t.string "college"
    t.string "major"
    t.string "employer"
    t.integer "career_advice_rank", null: false
    t.integer "personal_advice_rank", null: false
    t.integer "motivation_rank", null: false
    t.text "instagram_bio_text"
    t.text "instagram_bio_why_not_text"
    t.integer "share_major_rank"
    t.text "personality_text"
    t.text "night_text"
    t.text "not_on_google_text"
    t.text "how_impact_text"
    t.text "no_discuss_text"
    t.text "extra_info_text"
    t.integer "user_id"
    t.integer "tier"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin"
    t.boolean "approved"
    t.boolean "status", default: false, null: false
    t.integer "age", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone"
    t.string "picture_url"
    t.string "facebook", null: false
    t.string "email", null: false
    t.string "high_school"
    t.string "college"
    t.string "major"
    t.string "employer"
    t.integer "career_advice_rank", null: false
    t.integer "personal_advice_rank", null: false
    t.integer "motivation_rank", null: false
    t.integer "share_major_rank"
    t.text "personality_text"
    t.text "why_mentor_text"
    t.text "extra_info_text"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
