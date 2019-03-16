Rails.application.routes.draw do
  root 'home#index'
  resource :weather, only: [:create]
end
