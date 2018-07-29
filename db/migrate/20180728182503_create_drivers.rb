class CreateDrivers < ActiveRecord::Migration[5.0]
  def change
    create_table :drivers do |t|
      t.float :lat
      t.float :long
      t.string :name

      t.timestamps
    end
  end
end
