class CreateSpecies < ActiveRecord::Migration[5.0]
  def change
    create_table :species do |t|
      t.string :name, null: false
      t.integer :max_hp, null: false
      t.integer :capture_difficulty, null: false
    end
  end
end
