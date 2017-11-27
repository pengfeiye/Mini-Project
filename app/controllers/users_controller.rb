class UsersController < ApplicationController
	def index
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			flash[:success] = "Create Success"
			redirect_to root_path
		else
			flash[:error] = "oh no!"
			redirect_to sign_up_path
		end
	end

	def current_user
		render json: {name: current_user}
	end



end
