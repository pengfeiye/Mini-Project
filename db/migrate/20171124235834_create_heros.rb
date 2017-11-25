class CreateHeros < ActiveRecord::Migration[5.1]
  def change
    create_table :heros do |t|
      t.string :name
      t.integer :level
      t.integer :atk
      t.integer :def
      t.integer :agi
      t.integer :luk
      t.integer :wis
      t.integer :exp
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
