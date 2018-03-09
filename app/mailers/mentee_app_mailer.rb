class MenteeAppMailer < ApplicationMailer
  default sender: 'girlzftw@gmail.com'

  def signup_success(mentee)
    @mentee = mentee
    @url = 'http://www.girlzftw.com'
    mail(to: @mentee.email, subject: 'Thanks for your application to Girlz, FTW!')
  end
end
