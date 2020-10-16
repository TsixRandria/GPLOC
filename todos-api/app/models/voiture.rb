class Voiture < ApplicationRecord
    # model association
    has_many :voiture_description, dependent: :destroy

    # validations
    validates_presence_of :marque, :model
end
