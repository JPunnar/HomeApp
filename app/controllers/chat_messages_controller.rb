class ChatMessagesController < ApplicationController
  def create
    ChatMessage.create!(message: params[:chat_message][:message])
    @chat_messages = ChatMessage.all
    @chat_message = ChatMessage.new
    render partial: 'chat/chat'
  end
end
