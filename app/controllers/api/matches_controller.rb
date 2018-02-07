class Api::MatchesController < ApplicationController
  before_action :set_match, only: [:show, :edit, :update, :destroy]

  # GET /matches
  # GET /matches.json
  def index
    @users = User.where(approved: true)
    @mentees = Mentee.where(approved: true)
    @users.each do |mentor|
      @mentees.each do |mentee|
        determine_match_percentage(mentor, mentee)
      end
    end
  end

  # GET /matches/1
  # GET /matches/1.json
  def show
  end

  # GET /matches/new
  def new
    @match = Match.new
  end

  # GET /matches/1/edit
  def edit
  end

  # POST /matches
  # POST /matches.json
  def create
    @match = Match.new(match_params)

    respond_to do |format|
      if @match.save
        format.html { redirect_to @match, notice: 'Match was successfully created.' }
        format.json { render :show, status: :created, location: @match }
      else
        format.html { render :new }
        format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /matches/1
  # PATCH/PUT /matches/1.json
  def update
    respond_to do |format|
      if @match.update(match_params)
        format.html { redirect_to @match, notice: 'Match was successfully updated.' }
        format.json { render :show, status: :ok, location: @match }
      else
        format.html { render :edit }
        format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /matches/1
  # DELETE /matches/1.json
  def destroy
    @match.destroy
    respond_to do |format|
      format.html { redirect_to matches_url, notice: 'Match was successfully destroyed.' }
      format.json { head :no_content }
    end
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
      p mentee
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
      puts "percentage: #{match_sum.fdiv(total_sum) * 100}%"



    end
end
