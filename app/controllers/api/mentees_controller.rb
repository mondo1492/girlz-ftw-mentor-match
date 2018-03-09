class Api::MenteesController < ApplicationController
  before_action :require_signed_in, except: [:create]
  before_action :require_admin, only: [:destroy]

  def create
    @mentee = Mentee.new(mentee_params)

    if @mentee.save
      MenteeAppMailer.signup_success(@mentee).deliver_now
      render 'api/mentees/show'
    else
      render json: @mentee.errors.full_messages, status: 422
    end
  end

  def index
    @mentees = Mentee.all.includes(:user)
    render 'api/mentees/index'
  end

  def show
    @mentee = Mentee.find(params[:id])
    render 'api/mentees/show'
  end

  def destroy
    @mentee = Mentee.find(params[:id])
    if @mentee.destroy
      render json: {}
    else
      render json: @mentee.errors.full_messages, status: 422
    end
  end

  def update
    @mentee = Mentee.find(params[:id])

    # better logic - if only difference is user_id, do this check
    # otherwise don't

    if !@mentee.user_id.nil?
      render plain: 'Someone must have just taken this mentee :/ Please select another mentee.', status: 478
      # render json: @mentee.errors.full_messages, status: 422
    elsif @mentee.update(mentee_params)
      render 'api/mentees/show'
    else
      render json: @mentee.errors.full_messages, status: 422
    end
  end

  private

  def mentee_params
    params.require(:mentee)
          .permit(:age, :approved, :city, :college, :country,
                  :created_at, :email, :facebook, :first_name,
                  :high_school, :industry, :id, :instagram_bio_text,
                  :instagram_bio_why_not_text, :last_name, :major,
                  :phone, :provide, :share_industry_rank,
                  :share_major_rank, :status, :tier, :user_id, :video_URL)
  end
end
