class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.string :image_url
      t.string :sku
      t.text :description

      t.timestamps
    end
  end
end
