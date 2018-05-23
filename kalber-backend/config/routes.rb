Rails.application.routes.draw do
  root 'home#index'
  post 'user_sign_in' => 'authentication#user_sign_in'
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
