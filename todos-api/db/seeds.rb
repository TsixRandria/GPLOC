# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do 
    Client.create(
        nom:Faker::Name.name,
        prenom:Faker::Name.name,
        email:Faker::Internet.email,
        telephone:Faker::Number.leading_zero_number(digits: 10),
        mot_de_passe:Faker::Finance.credit_card
    )

end