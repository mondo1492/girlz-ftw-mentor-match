class AddUserIdToMentees < ActiveRecord::Migration[5.1]
  def change
    add_column :mentees, :user_id, :integer
  end
end
