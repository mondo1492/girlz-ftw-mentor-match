# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Mentee.destroy_all


user_list = [
  [ "user1", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "1", "facebook",
  "some_email", 2, 1, 3],
  [ "user2", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "2", "facebook",
  "some_email", 2, 1, 3],
  [ "user3", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "3", "facebook",
  "some_email", 2, 1, 3],
  [ "user4", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "4", "facebook",
  "some_email", 2, 1, 3],
  [ "user5", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "5", "facebook",
  "some_email", 2, 1, 3],
  [ "admin", "adminpassword", true, true, false, 25, "Belmont", "USA", "adminfirst", "adminlast", "facebook",
  "some_email", 2, 1, 3],
  [ "user6", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "6", "facebook",
  "some_email", 2, 1, 3],
  [ "user7", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "7", "facebook",
  "some_email", 2, 1, 3],
  [ "user8", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "8", "facebook",
  "some_email", 2, 1, 3],
  [ "user9", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "9", "facebook",
  "some_email", 2, 1, 3],
  [ "user10", "fakeuserpw", false, nil, false, 25, "Belmont", "USA", "User", "10", "facebook",
  "some_email", 2, 1, 3]
]
user_list.each do |username, password, admin, approved, status, age, city, country,
  first_name, last_name, facebook, email, career_advice_rank,
  personal_advice_rank, motivation_rank|
  User.create!( username: username, password: password, approved: approved,
    admin: admin, status: status, age: age, city: city, country: country,
    first_name: first_name, last_name: last_name, facebook: facebook,
    email: email, motivation_rank: motivation_rank,
    personal_advice_rank: personal_advice_rank, career_advice_rank: career_advice_rank)
end

mentee_list = [
  [ false, true, 25, "Belmont", "USA", "Menteefirst", "MenteeLast", "facebook",
    "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Belmont", "USA", "Menteesecond", "MenteeLast", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Belmont", "USA", "Mentee3", "MenteeLast", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Belmont", "USA", "Mentee4", "MenteeLast", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Belmont", "USA", "Mentee5", "MenteeLast", "facebook",
  "some_email", 2, 1, 3, nil]
]
mentee_list.each do |approved, status, age, city, country,
  first_name, last_name, facebook, email, career_advice_rank,
  personal_advice_rank, motivation_rank, user_id|
  Mentee.create!( approved: approved, status: status, age: age, city: city, country: country,
    first_name: first_name, last_name: last_name, facebook: facebook,
    email: email, motivation_rank: motivation_rank,
    personal_advice_rank: personal_advice_rank, career_advice_rank: career_advice_rank,
  user_id: user_id)
end
