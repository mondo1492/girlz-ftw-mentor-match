class Mentee < ApplicationRecord

  belongs_to :user, optional: true
  has_many :matches

  def mentor_name
    if self.user
      return "#{self.user.first_name} #{self.user.last_name}"
    else
      ""
    end
  end
end
