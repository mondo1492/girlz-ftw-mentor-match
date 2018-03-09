class Match < ApplicationRecord
  belongs_to :user
  belongs_to :mentee

  def self.determine_match_percentage(mentor, mentee)
    # rewrite these to deal with mentors AND mentees having multiple of these fields

    total_params = 4

    unblock_methods_matched = 0

    mentee.instagram_bio_why_not_text.split('|').each do |unblock_method|
      if mentor.unblock_methods.include?(unblock_method)
        unblock_methods_matched += 1
      end
    end

    # Provide
    provide_matched = 0

    if mentee.provide
      mentee.provide.split('|').each do |prov|
        if mentor.provide.include?(prov)
          provide_matched += 1
        end
      end
    end

    # Industry
    industry_matched = 0

    if mentee.industry
      mentee.industry.split('|').each do |indus|
        if mentor.industry.include?(indus)
          industry_matched += 1
        end
      end
    end

    # industry_matched = 3 if industry_matched = 1
    # industry_matched = 3.5 if industry_matched = 2
    # industry_matched = 4 if industry_matched = 3

    industry_sum = mentee.share_industry_rank + mentor.share_industry_rank
    total_params -= 1 if industry_sum == 0

    # Major
    major_matched = 0

    mentee.major.split('|').each do |maj|
      if mentor.major.include?(maj)
        major_matched += 1
      end
    end

    # major_matched = 3 if major_matched = 1
    # major_matched = 3.5 if major_matched = 2
    # major_matched = 4 if major_matched = 3

    major_sum = mentee.share_major_rank + mentor.share_major_rank
    total_params -= 1 if major_sum == 0

    weighted_major = major_matched * major_sum
    weighted_industry = industry_matched * industry_sum

    total = weighted_major + weighted_industry + unblock_methods_matched + provide_matched

    total.fdiv(total_params)

  end



end
