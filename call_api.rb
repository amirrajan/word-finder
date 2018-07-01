require 'net/http'
require 'nokogiri'
host = 'degrassi-minister-93543.herokuapp.com'
root = Nokogiri::HTML(Net::HTTP.get(host, '/'))
response = Nokogiri::HTML(
  Net::HTTP::get(
    host,
    root.css('form[id="perform-search"]')
      .first['action']
      .concat("?")
      .concat('search-text=he__o')))

puts "Results:"
puts response.css("#search-result li a").map { |n| n['id'] }

puts "Permalink:"
puts response.css('a[rel="bookmark"]').map { |n| n['href'] }
