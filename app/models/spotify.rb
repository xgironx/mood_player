class Spotify

  attr_accessor :uri

  # need to add artist and track params
  def initialize()

    url ="https://api.spotify.com/v1/search?q=tania%20bowra&type=artist&limit=1"

    response = HTTParty.get(url).parsed_response

    @uri = response['artists']['items'][0]['uri']

  end

end
