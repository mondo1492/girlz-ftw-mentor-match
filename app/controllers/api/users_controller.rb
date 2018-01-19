class Api::UsersController < ApplicationController
  before_action :require_admin, except: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      MentorAppMailer.signup_success(@user).deliver_now
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
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
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def admin_user_params
    params.require(:user)
          .permit(
            :admin, :age, :approved, :city, :college, :country,
            :created_at, :email, :employer, :facebook, :first_name,
            :industry, :id, :job_description, :last_name, :linkedin,
            :major, :mentee_count, :mentee_names, :phone, :provide,
            :share_industry_rank, :share_major_rank, :status,
            :unblock_methods, :username, :videoURL
          )
  end

  def user_params
    params.require(:user)
          .permit(
            :age, :city, :college, :country, :created_at, :email,
            :employer, :facebook, :first_name, :industry, :id,
            :job_description, :last_name, :linkedin, :major,
            :mentee_count, :mentee_names, :password, :phone, :provide,
            :share_industry_rank, :share_major_rank, :status,
            :unblock_methods, :username, :videoURL
          )
  end
end
