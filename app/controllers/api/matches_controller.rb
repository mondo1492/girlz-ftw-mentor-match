class Api::MatchesController < ApplicationController
  # before_action :set_match, only: [:show, :edit, :update, :destroy]

  def generate
    @users = User.where(approved: true)
    @mentees = Mentee.where(approved: true)
    @users.each do |mentor|
      @mentees.each do |mentee|
        match_percent = determine_match_percentage(mentor, mentee)
        @match = Match.new({user_id: mentor.id, mentee_id: mentee.id, match_percent: match_percent})
        @match.save
      end
    end
  end

  def index
    # to scale: order this query by match_percent, then limit
    @matches = Match.where(user_id: 4).includes(:mentee).where(mentees: {user_id: nil})
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

    def determine_match_percentage(mentor, mentee)
      # rewrite these to deal with mentors AND mentees having multiple of these fields

      # handle mentee bio why not
      unblock_methods_total = 0
      unblock_methods_matched = 0
      mentee.instagram_bio_why_not_text.split('|').each do |unblock_method|
        unblock_methods_total += 1
        if mentor.unblock_methods.include?(unblock_method)
          unblock_methods_matched += 1
        end
      end

      # Industry
      industry_total = 0
      industry_matched = 0
      if mentee.industry
        mentee.industry.split('|').each do |indus|
          industry_total += 1
          if mentor.industry.include?(indus)
            industry_matched += 1
          end
        end
      end

      # Major
      major_total = 0
      major_matched = 0
      mentee.major.split('|').each do |maj|
        major_total += 1
        if mentor.major.include?(maj)
          major_matched += 1
        end
      end

      # Provide
      provide_total = 0
      provide_matched = 0
      if mentee.provide
        mentee.provide.split('|').each do |prov|
          provide_total += 1
          if mentor.provide.include?(prov)
            provide_matched += 1
          end
        end
      end

      match_sum = (unblock_methods_matched + industry_matched + major_matched + provide_matched)
      total_sum = (unblock_methods_total + industry_total + major_total + provide_total)
      puts "#{mentor.first_name} and #{mentee.first_name} match analysis:"
      puts "  percentage: #{match_sum.fdiv(total_sum) * 100}%"
      puts
      puts

      # ((param1 * param1_multiplier) + (param2 * param2_multiplier)... )/ num_params
      # if both people say a param has 0 importance, num_params -= 1
    end
end
