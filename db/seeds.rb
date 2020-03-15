# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

#videostable初期データ取り込み
# CSV.foreach(Rails.root.join('test', 'pokemon_speed_data', 'character_speed_data.csv')) do |character_data|
#   p character_data
#   Character.find_or_create_by(name: character_data[0], race_speed: character_data[1], maximum_speed: character_data[2], regular_speed: character_data[3], no_speed: character_data[4])
# end
# range = 0..31
# range.each do |number|
#   p number
#   Speed.find_or_create_by(individual_value: number)
# answer = 0
# range = 1..100
# range.each do |number|
#   g = 1
#   data = number
#   while g < 4
#     g += 1
#     data = data * number
#     p data
#   end
#   answer = data + answer
#   p answer
# end
# 
answer = 0
(1..50000).each do |k|
  if k % 3 == 0
    answer = k + answer
  elsif k.to_s.include?("3")
    answer = k + answer
  end
end
p answer