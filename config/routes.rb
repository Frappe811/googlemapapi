Rails.application.routes.draw do
  root to: 'drivers#index'

  resources :drivers
  mount API::Base, at: "/"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
