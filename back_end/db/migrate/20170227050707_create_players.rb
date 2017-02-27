class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.belongs_to :game, null: false
      t.integer :turn_priority
      t.integer :active_pokemon
    end
  end
end
