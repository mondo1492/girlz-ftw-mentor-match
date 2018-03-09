class ChangeMenteesJanApp < ActiveRecord::Migration[5.1]
  def change
    remove_column :mentees, :career_advice_rank, :integer
    remove_column :mentees, :personal_advice_rank, :integer
    remove_column :mentees, :motivation_rank, :integer
    remove_column :mentees, :personality_text, :text
    remove_column :mentees, :night_text, :text
    remove_column :mentees, :how_impact_text, :text
    remove_column :mentees, :no_discuss_text, :text
    remove_column :mentees, :extra_info_text, :text
    remove_column :mentees, :not_on_google_text, :text
    remove_column :mentees, :headshot_url, :string
    remove_column :mentees, :youtube_url, :string
    remove_column :mentees, :high_school, :string
    remove_column :mentees, :employer, :string

    add_column :mentees, :industry, :text
    add_column :mentees, :share_industry_rank, :integer
    add_column :mentees, :provide, :text
    add_column :mentees, :video_URL, :text
  end
end
