class V1::SessionsController < V1::ApiController
  before_action :require_login, only: :destroy
  
  def create
    head :unauthorized unless
    @user = User.find_by_user_name(params[:user_name]) and
    @user.valid_password?(params[:password]) and
    @user.jwt_matcher = rand(1000000).to_s and
    @user.save and
    begin
      payload = { user_id: @user.id, jwt_matcher: @user.jwt_matcher }
      jwt = JWT.encode(
        { data: payload, exp: (Time.now + 2.days).to_i },
        Rails.application.secrets.secret_key_base,
        'HS256'
      )
      render :create, status: :created, locals: { token: jwt }
    end unless
    authenticate_token and head :created

  end
  
  def destroy
    unauthenticate_token
  end
end