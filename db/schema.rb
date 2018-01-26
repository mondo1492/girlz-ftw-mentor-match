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

ActiveRecord::Schema.define(version: 20180126071731) do

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
    t.string "college"
    t.string "major"
    t.text "instagram_bio_text"
    t.text "instagram_bio_why_not_text"
    t.integer "share_major_rank"
    t.integer "user_id"
    t.integer "tier"
    t.text "industry"
    t.integer "share_industry_rank"
    t.text "provide"
    t.text "video_URL"
    t.text "high_school"
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
    t.string "facebook", null: false
    t.string "email", null: false
    t.string "college"
    t.string "major"
    t.string "employer"
    t.integer "share_major_rank"
    t.string "headshot_url"
    t.text "industry"
    t.integer "share_industry_rank"
    t.text "job_description"
    t.text "linkedin"
    t.text "provide"
    t.text "unblock_methods"
    t.text "video_URL"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
