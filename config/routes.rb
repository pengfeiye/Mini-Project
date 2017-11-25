Rails.application.routes.draw do
	root "users#index"
	get "/", to: "users#index", as: "home"
	get "/signup", to: "users#new"
	post "/signup", to: "users#create"
	get "/show", to: "users#show", as: "show_user"


	get "/login", to: "sessions#new"
	post "/login", to: "sessions#create"
end
