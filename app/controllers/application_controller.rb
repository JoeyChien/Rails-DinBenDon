class ApplicationController < ActionController::Base

  before_action :check_login
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found  
  
  # 定義成在controller & view也可以用的方法
  helper_method :current_user

  private

  def check_login
    redirect_to login_path unless current_user
  end

  def record_not_found
    render file: 'public/404.html',
           status: 404,
           layout: false
  end

  def current_user
    # find沒找到會噴錯誤訊息造成nav中使用這個方法的地方出錯導向404，故改用find_by(沒有會回nil)
    User.find_by(id: session[:joey2020])
  end
end
