Rails.application.routes.draw do

  root :to => 'moods#index'

  resources :moods, :only =>[:index, :show] do
    resources :songs, :only =>[:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
