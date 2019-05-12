class HomeController < ApplicationController
  def index
    @chat_messages = ChatMessage.all
    @chat_message = ChatMessage.new
  end
end
