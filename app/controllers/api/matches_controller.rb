class Api::MatchesController < ApplicationController
  # before_action :set_match, only: [:show, :edit, :update, :destroy]
  before_action :require_admin, only: [:generate]
  # before_action :require_signed_in

  def generate
    @users = User.where(approved: true)
    @mentees = Mentee.where(approved: true)
    @users.each do |mentor|
      next if mentor.admin
      @mentees.each do |mentee|
        match_percent = Match.determine_match_percentage(mentor, mentee)
        puts "#{mentor.first_name} and #{mentee.first_name}: #{match_percent}"
        puts
        puts
        # @match = Match.new({user_id: mentor.id, mentee_id: mentee.id, match_percent: match_percent})
        # @match.save
      end
    end
  end

  def index
    # to scale: order this query by match_percent, then limit
    @matches = Match.where(user_id: params[:id]).includes(:mentee).where(mentees: {user_id: nil})
    @mentees = []

    @matches.each do |match|
      mentee = Mentee.find(match.mentee_id)
      mentee.match_percent = match.match_percent
      @mentees.push(mentee)
    end

    render 'api/matches/index'
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match
      @match = Match.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def match_params
      params.fetch(:match, {})
    end

end
