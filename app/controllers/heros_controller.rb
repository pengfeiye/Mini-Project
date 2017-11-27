class HerosController < ApplicationController
	require "json"

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
		set_user
		puts "kkk"
		@hero = current_user.hero
		respond_to do |format|
			format.html
			format.js
		end
	end
	private
	def set_user
		cookies.delete :user
    cookies[:user_id] = current_user.id
		cookies[:hero_atk] = current_user.hero.atk
		cookies[:hero_def] = current_user.hero.def
		cookies[:hero_agi] = current_user.hero.agi
		cookies[:hero_luk] = current_user.hero.luk
		cookies[:hero_wis] = current_user.hero.wis
		cookies[:hero_exp] = current_user.hero.exp
		cookies[:hero_lvl] = current_user.hero.level

  end
end
