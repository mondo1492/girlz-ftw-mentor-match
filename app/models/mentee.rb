class Mentee < ApplicationRecord

  belongs_to :user, optional: true

  def mentor_name
    return "#{self.user.first_name} #{self.user.last_name}"
  end
end
