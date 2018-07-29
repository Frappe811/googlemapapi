class AddLngToDriver < ActiveRecord::Migration[5.0]
  def change
    add_column :drivers, :lng, :float
  end
end
