class RenameIndividualValueColumnToSpeeds < ActiveRecord::Migration[5.2]
  def change
    rename_column :speeds, :Individual_value, :individual_value
  end
end
