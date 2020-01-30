class SpeedsController < ApplicationController
  def home
    @character = Character.all
    
  end
end
