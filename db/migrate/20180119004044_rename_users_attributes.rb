class RenameUsersAttributes < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :picture_url, :string
    remove_column :users, :youtube_url, :string
    remove_column :users, :high_school, :string
    remove_column :users, :career_advice_rank, :integer
    remove_column :users, :personal_advice_rank, :integer
    remove_column :users, :motivation_rank, :integer
    remove_column :users, :personality_text, :text
    remove_column :users, :why_mentor_text, :text
    remove_column :users, :extra_info_text, :text

    add_column :users, :industry, :text
    add_column :users, :share_industry_rank, :integer
    add_column :users, :job_description, :text
    add_column :users, :linkedin, :text
    add_column :users, :provide, :text
    add_column :users, :unblock_methods, :text
  end
end
