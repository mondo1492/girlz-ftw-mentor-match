Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    get 'matches/generate' => "matches#generate"
    get 'matches/index/:id' => "matches#index"
    resources :users, only: [:create, :destroy, :index, :show, :update]
    resources :mentees, only: [:create, :destroy, :index, :show, :update]

  end
end
