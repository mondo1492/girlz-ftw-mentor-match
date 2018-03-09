class ChangeUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :approved, :boolean, null: false, default: false
    add_column :users, :status, :boolean, null: false, default: false
    add_column :users, :age, :integer, null: false
    add_column :users, :city, :string, null: false
    add_column :users, :country, :string, null: false
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :phone, :string
    add_column :users, :picture_url, :string
    add_column :users, :facebook, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :high_school, :string
    add_column :users, :college, :string
    add_column :users, :major, :string
    add_column :users, :employer, :string

    add_column :users, :career_advice_rank, :integer, null: false
    add_column :users, :personal_advice_rank, :integer, null: false
    add_column :users, :motivation_rank, :integer, null: false
    add_column :users, :share_major_rank, :integer

    add_column :users, :personality_text, :text
    add_column :users, :why_mentor_text, :text
    add_column :users, :extra_info_text, :text
  end
end
