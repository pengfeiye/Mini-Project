class SessionsController < ApplicationController
	def new
    @user = User.new
  end

  def create
    # confirm that email/password combination is correct
    @user = User.confirm(user_params)
    puts "user: #{@user}"
    if @user
      login(@user)
      flash[:success] = "Successfully logged in."      # <--- Add this flash notice
      # redirect_to show_user_path(@user[:id])
      redirect_to hero_index_path
    else
      redirect_to login_path
    end
	end

	def destroy
    logout
    flash[:success] = "Successfully logged out."        # <--- Add this flash notice
    redirect_to root_path
  end

end
