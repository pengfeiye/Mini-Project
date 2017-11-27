Rails.application.routes.draw do
	root "users#index"
	get "/", to: "users#index", as: "home"
	get "/signup", to: "users#new"
	post "/signup", to: "users#create"
	get "/show", to: "users#show", as: "show_user"
	get "/this/is/very/private", to: "users#current_user", as:"current_user"

	get "/login", to: "sessions#new"
	post "/login", to: "sessions#create"
	delete "/logout", to: "sessions#destroy", as: "logout"

	get "/hero/index", to: "heros#index", as: "hero_index"
	get "/playground", to: "heros#show", as: "playground"
	get "/new_hero", to: "heros#new", as: "new_hero"
	post "/new_hero", to: "heros#create"
	put "/hero/:id", to: "heros#update", as: "update_hero"
end
