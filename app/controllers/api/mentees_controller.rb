class Api::MenteesController < ApplicationController
  before_action :require_signed_in

    def create
      @mentee = Mentee.new(parsed_params)
      @mentee.user_id = current_user.id

      if @mentee.save
        render "api/mentees/show"
      else
        render json: @mentee.errors.full_messages, status: 422
      end
    end

    def index
      @mentees = Mentee.where(user_id: current_user.id)
      render "api/mentees/index"
    end

    def show
      @mentee = Mentee.find(params[:id])
      render "api/mentees/show"
    end

    def destroy
      @mentee = Mentee.find(params[:id])
      if @mentee.destroy
        render json: {}
      else
        render json: @mentee.errors.full_messages, status: 422
      end
    end

    private

    def mentee_params
      params.require(:mentee).permit(:approved, :status, :age, :city,
        :country, :first_name, :last_name, :phone, :facebook, :email,
        :high_school, :college, :major, :employer, :career_advice_rank,
        :personal_advice_rank, :motivation_rank, :instagram_bio_text,
        :instagram_bio_why_not_text, :share_major_rank,
        :personal_advice_rank, :night_text, :not_on_google_text,
        :how_impact_text, :no_discuss_text, :extra_info_text )
    end
end
