class MoodsController < ApplicationController

  def index
    @moods = Mood.all
  end

  def show
    @mood = Mood.find(params[:id])

    @uri = Spotify.new()
    # @response = HTTParty.get("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist&limit=1").parsed_response

    #@result = @response['artists']


  respond_to do |format|
    format.json { render json: @uri }
    format.html { render :show}
  end
end
end
