Rails.application.routes.draw do
	root "users#index"
	get "/", to: "users#index", as: "home"
	get "/signup", to: "users#new", as: "sign_up"
	post "/signup", to: "users#create"
end
