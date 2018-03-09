class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.integer :user_id, null: false
      t.integer :mentee_id, null: false
      t.integer :match_percent
      t.timestamps
    end
  end
end
