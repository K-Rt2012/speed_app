Encoding.default_external = 'utf-8'
require 'nokogiri'
require 'open-uri'
require 'csv'

characters_data = Array.new
  url = "https://game8.jp/pokemon-sword-shield/273377"
  charset = nil
  #begin-rescue　例外処理を行い、エラー内容をeに格納する
  begin
    html = open(url) do |f|
      charset = f.charset
      f.read
    end
  rescue OpenURI::HTTPError => e
  end
  page = Nokogiri::HTML.parse(html,nil,charset)
  #xpathでnodeを指定
  # character_count = page.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr").count
  # p character_count
  # 1.upto(character_count) do |character_number|
  #   p character_number
    #page.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr").with_index(1) do |node, i|
speed_data = page.xpath('//*[@id="js-end-trigger"]/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr').map
speed_data.each.with_index(1) do |node, i|
  p node
  #nodeのhref属性を取得
  race_speed = node.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr[#{i}]/th").inner_text.to_i
  name = node.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr[#{i}]/td[1]/a/text()").inner_text
  maximum_speed = node.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr[#{i}]/td[2]").inner_text.to_i
  regular_speed = node.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr[#{i}]/td[3]").inner_text.to_i
  no_speed = node.xpath("//*[@id='js-end-trigger']/div[2]/div[1]/div[1]/div[3]/table[1]/tbody/tr[#{i}]/td[6]").inner_text.to_i
  p characters_data << [name, race_speed, maximum_speed, regular_speed, no_speed]
end
csv_format = CSV.open("character_speed_data.csv", "w:UTF-8") do |csv|
  characters_data.each do |speed_data|
    csv << speed_data
    p csv
  end
end
