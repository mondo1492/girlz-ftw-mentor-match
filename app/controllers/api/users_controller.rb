class Api::UsersController < ApplicationController
  before_action :require_admin, except: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: {}
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(admin_user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def admin_user_params
    params.require(:user).permit(:username, :admin, :approved, :status, :age, :city, :country, :first_name, :last_name, :phone, :facebook,
    :email, :picture_url, :high_school, :college, :major, :employer, :career_advice_rank, :personal_advice_rank, :motivation_rank, :personality_text, :why_mentor_text, :extra_info_text, :created_at)
  end

  def user_params
    params.require(:user).permit(:username, :password, :status, :age, :city, :country, :first_name, :last_name, :phone, :facebook,
    :email, :picture_url, :high_school, :college, :major, :employer, :career_advice_rank, :personal_advice_rank, :motivation_rank, :personality_text, :why_mentor_text, :extra_info_text, :created_at)
  end
end
