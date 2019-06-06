class ChatMessagesController < ApplicationController
  def create
    message = ChatMessage.create!(message: params[:chat_message][:message])
    ChatMessage.first.delete
    rendered_html = render partial: 'chat/chat_message', locals: { chat_message: message }
    ActionCable.server.broadcast("chat_channel", rendered_html)
    head :no_content
  end
end
