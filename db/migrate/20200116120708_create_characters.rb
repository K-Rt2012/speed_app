class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :maximum_speed
      t.integer :regular_speed
      t.integer :race_speed
      t.integer :no_speed

      t.timestamps
    end
  end
end
