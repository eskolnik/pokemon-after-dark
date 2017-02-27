class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.belongs_to :game
      t.belongs_to :player
      t.belongs_to :species, null: false
      t.integer :hp
      t.integer :capture_modifier
      t.boolean :in_deck
    end
  end
end
