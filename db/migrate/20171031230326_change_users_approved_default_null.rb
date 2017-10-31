class ChangeUsersApprovedDefaultNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :approved, true
    change_column_default :users, :approved, from: false, to: nil
  end
end
