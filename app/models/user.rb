class User < ApplicationRecord
  has_secure_password
  has_one :hero

  def self.confirm(params)
    @user = User.find_by({name: params[:name]})
    @user ? @user.authenticate(params[:password]) : false
  end
end
