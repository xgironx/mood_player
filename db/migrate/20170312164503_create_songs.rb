class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :album_url
      t.string :uri
      t.string :song_length
      t.string :votes
      t.references :mood

      t.timestamps
    end
  end
end
