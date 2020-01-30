class ApplicationController < ActionController::Base
  def test
    # messages = params[:message]
    # render json: {message: "#{messages}!"}
    # if messages = "hello"
    #   render json: {message: "hello!"}
    # elsif messages = "morning"
    #   render json: {message: "morning!"}
  end
  def message
    messages = params[:q]
    render json: {characters: Character.where("name like '%#{messages}%'")}
  end
end
