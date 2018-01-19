class MentorAppMailer < ApplicationMailer
  default sender: 'girlzftw@gmail.com'

  def signup_success(user)
    @user = user
    @url = 'http://www.girlzftw.com'
    mail(to: @user.email, subject: 'Thanks for your application to Girlz,FTW!')
  end
end
