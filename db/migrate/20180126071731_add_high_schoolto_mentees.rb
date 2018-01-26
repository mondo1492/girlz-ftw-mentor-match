class AddHighSchooltoMentees < ActiveRecord::Migration[5.1]
  def change
    add_column :mentees, :high_school, :text
  end
end
