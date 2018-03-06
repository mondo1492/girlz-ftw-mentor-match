class Match < ApplicationRecord
  belongs_to :user
  belongs_to :mentee

  def self.determine_match_percentage(mentor, mentee)
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
