class CreateSpeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :speeds do |t|
      t.integer :individual_value

      t.timestamps
    end
  end
end
