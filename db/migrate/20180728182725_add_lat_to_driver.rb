class AddLatToDriver < ActiveRecord::Migration[5.0]
  def change
    add_column :drivers, :lat, :float
  end
end
