# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

#videostable初期データ取り込み
CSV.foreach(Rails.root.join('test', 'pokemon_speed_data', 'character_speed_data.csv')) do |character_data|
  p character_data
  Character.find_or_create_by(name: character_data[0], race_speed: character_data[1], maximum_speed: character_data[2], regular_speed: character_data[3], no_speed: character_data[4])
end
