class ChangeMatchPercentToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :matches, :match_percent, :float
  end
end
