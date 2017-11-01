class AddPicUrlAndYoutubeUrlToMentorsAndMentees < ActiveRecord::Migration[5.1]
  def change
    add_column :mentees, :youtube_url, :string
    add_column :users, :youtube_url, :string
    add_column :mentees, :headshot_url, :string
    add_column :users, :headshot_url, :string
  end
end
