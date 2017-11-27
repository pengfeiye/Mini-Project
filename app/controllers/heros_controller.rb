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
		set_user
		puts "kkk"
		@hero = current_user.hero
		respond_to :js, :html
		# respond_to do |f|
	 #    f.js { render :content_type => 'text/javascript' }
	 #    f.html
	 #  end
	end

	def update
		puts "heroupdateeee"
		puts params
		@hero = Hero.find(params[:id])
		if @hero.update(hero_params)
			set_user
		end
	end

	private
	def set_user
		cookies.delete :user
    cookies[:hero_id] = current_user.hero.id
		cookies[:hero_atk] = current_user.hero.atk
		cookies[:hero_def] = current_user.hero.def
		cookies[:hero_agi] = current_user.hero.agi
		cookies[:hero_luk] = current_user.hero.luk
		cookies[:hero_wis] = current_user.hero.wis
		cookies[:hero_exp] = current_user.hero.exp
		cookies[:hero_lvl] = current_user.hero.level
  end

  def hero_params
  	params.permit(:level)
  end

end
