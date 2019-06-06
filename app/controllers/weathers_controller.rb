class WeathersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    weather = Weather.fetch_current_weather(
      latitude: params['latitude'],
      longitude: params['longitude']
    )
    render json: weather
  rescue StandardError
    render json: {:errors=>'Something went wrong.'}
  end
end
