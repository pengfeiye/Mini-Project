class HerosController < ApplicationController
	def index
		if current_user.hero != nil
			redirect_to playground_path
		else
			redirect_to new_hero_path
		end
	end

	def new
		@hero = Hero.new
		if current_user.hero != nil
			redirect_to playground_path
		end
	end

	def create
		current_user.hero = Hero.new(hero_params)
		redirect_to playground_path
	end

	def show
		@hero = current_user.hero
		respond_to do |format|
			format.html
			format.js
		end
	end
end
