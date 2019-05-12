Rails.application.routes.draw do
  root 'home#index'
  resource :weather, only: [:create]
  resource :chat_messages, only: [:create]
end
