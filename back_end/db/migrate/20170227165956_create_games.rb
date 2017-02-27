class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string  :name, null: false
      t.integer :phase, null: false
      t.integer :current_turn
      t.integer :wild_pokemon_id
  end
end
