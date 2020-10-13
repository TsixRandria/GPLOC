class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.text :nom
      t.text :prenom
      t.string :telephone
      t.string :mot_de_passe
      t.text :email

      t.timestamps
    end
  end
end
