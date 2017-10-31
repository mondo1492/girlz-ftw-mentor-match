class Mentee < ApplicationRecord

  belongs_to :user

  def mentor_name
    return "#{self.user.first_name} #{self.user.last_name}"
  end
end
