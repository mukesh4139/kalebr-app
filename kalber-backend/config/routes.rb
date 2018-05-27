Rails.application.routes.draw do
  root 'home#index'
  post 'user_sign_in' => 'authentication#user_sign_in'
  post 'signed_in_user' => 'authentication#signed_in_user'

  namespace :api do
    namespace :v1 do
      resources :users do
        member do
          get 'reviews'
        end
      end
      resources :questions, except: [:new, :edit, :destroy]
      resources :reviews do
        member do
          post 'comment'
        end
      end
      resources :performance_reviews, except: [:new, :edit, :destroy]
    end
  end

  match '*path', to: "home#index", via: [:get, :post]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
