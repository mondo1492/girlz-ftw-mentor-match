class AddTierToMentees < ActiveRecord::Migration[5.1]
  def change
    add_column :mentees, :tier, :integer
  end
end
