require 'net/http'

class Weather < ActiveRecord::Base
  def self.fetch_current_weather(latitude:, longitude:)
    url = URI.parse(
      "http://api.openweathermap.org/data/2.5/weather?" \
      "lat=#{latitude}" \
      "&lon=#{longitude}" \
      "&units=metric" \
      "&APPID=#{ENV['WEATHER_API_KEY']}"
    )

    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) do |http|
      http.request(req)
    end
    res = JSON.parse(res.body)

    parse_json(res)
  end

  def self.parse_json(json)
    temperature = json.dig('main', 'temp')
    description = begin
      json['weather'].map do |wt|
        wt['description']
      end
    end.join(', ')
    humidity = json.dig('main', 'humidity')
    visibility = json['visibility']
    wind = json.dig('wind', 'speed')

    {
      temperature: temperature,
      description: description,
      humidity: humidity,
      visibility: visibility,
      wind: wind
    }
  end
end
