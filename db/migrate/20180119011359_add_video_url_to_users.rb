class AddVideoUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :video_URL, :text
  end
end
