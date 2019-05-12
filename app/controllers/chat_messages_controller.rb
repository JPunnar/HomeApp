class ChatMessagesController < ApplicationController
  def create
    ChatMessage.create!(message: params[:chat_message][:message])

  end
end
