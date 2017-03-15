class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :active_pokemon
      t.belongs_to :game

      t.timestamps
    end
  end
end
