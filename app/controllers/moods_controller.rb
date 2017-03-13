class MoodsController < ApplicationController

  def index
    @moods = Mood.all
  end

  def show
    @mood = Mood.find(params[:id])

    # def get_uri
    #   @uri = Spotify.new()
    # end
    @response = HTTParty.get("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist&limit=1").parsed_response

    #@result = @response['artists']


  respond_to do |format|
    format.json { render json: @response }
    format.html { render :show}
  end
end
end
