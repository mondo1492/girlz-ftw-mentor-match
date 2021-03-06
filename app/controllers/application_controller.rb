class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_signed_in
    render json: {base: ['Invalid Credentials.']}, status: 401 unless current_user
  end

  def require_admin
    render json: {base: ['Invalid Credentials. Admins only.']}, status: 401 unless current_user.admin
  end
end
