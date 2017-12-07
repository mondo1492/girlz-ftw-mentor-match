class ChangeMentees < ActiveRecord::Migration[5.1]
  def change
    add_column :mentees, :approved, :boolean, null:false, default: false
    add_column :mentees, :status, :boolean, null:false, default: false
    add_column :mentees, :age, :integer, null:false
    add_column :mentees, :city, :string, null:false
    add_column :mentees, :country, :string, null:false
    add_column :mentees, :first_name, :string, null:false
    add_column :mentees, :last_name, :string, null:false
    add_column :mentees, :phone, :string
    add_column :mentees, :facebook, :string, null:false
    add_column :mentees, :email, :string, null:false
    add_column :mentees, :high_school, :string
    add_column :mentees, :college, :string
    add_column :mentees, :major, :string
    add_column :mentees, :employer, :string

    add_column :mentees, :career_advice_rank, :integer, null:false
    add_column :mentees, :personal_advice_rank, :integer, null:false
    add_column :mentees, :motivation_rank, :integer, null:false

    add_column :mentees, :instagram_bio_text, :text
    add_column :mentees, :instagram_bio_why_not_text, :text

    add_column :mentees, :share_major_rank, :integer
    add_column :mentees, :personality_text, :text
    add_column :mentees, :night_text, :text
    add_column :mentees, :not_on_google_text, :text
    add_column :mentees, :how_impact_text, :text
    add_column :mentees, :no_discuss_text, :text
    add_column :mentees, :extra_info_text, :text
  end
end
