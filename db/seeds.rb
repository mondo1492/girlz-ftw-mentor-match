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
  # [
  #   admin, age, approved, city, college, country, created_at, email,
  #   employer, facebook, first_name, industry, job_description, last_name,
  #   linkedin, major, mentee_count, mentee_names, password, phone, provide,
  #   share_industry_rank, share_major_rank, status, unblock_methods,
  #   username, video_URL
  # ],
  [
    true, 25, true, 'admin city', 'admin college', 'admin country',
    'admin email', 'admin employer', 'admin facebook', 'admin first_name',
    'admin industry', 'admin job_description', 'admin last_name',
    'admin linkedin', 'admin major', 'adminpassword',
    'admin phone', 'admin provide', 1, 2, true, 'admin unblock_methods',
    'admin', 'admin video_URL'
  ],
  [
    false, 25, false, 'fmentor city', 'fmentor college', 'fmentor country',
    'fmentor email', 'fmentor employer', 'fmentor facebook', 'fmentor first_name',
    'fmentor industry', 'fmentor job_description', 'fmentor last_name',
    'fmentor linkedin', 'fmentor major', 'fakeuserpw',
    'fmentor phone', 'fmentor provide', 1, 2, false, 'fmentor unblock_methods',
    'fmentor1', 'fmentor video_URL'
  ],
  [
    false, 25, false, 'fmentor city', 'fmentor college', 'fmentor country',
    'fmentor email', 'fmentor employer', 'fmentor facebook', 'fmentor first_name',
    'fmentor industry', 'fmentor job_description', 'fmentor last_name',
    'fmentor linkedin', 'fmentor major', 'fakeuserpw',
    'fmentor phone', 'fmentor provide', 1, 2, false, 'fmentor unblock_methods',
    'fmentor2', 'fmentor video_URL'
  ],
  [
    false, 25, false, 'fmentor city', 'fmentor college', 'fmentor country',
    'fmentor email', 'fmentor employer', 'fmentor facebook', 'fmentor first_name',
    'fmentor industry', 'fmentor job_description', 'fmentor last_name',
    'fmentor linkedin', 'fmentor major', 'fakeuserpw',
    'fmentor phone', 'fmentor provide', 1, 2, false, 'fmentor unblock_methods',
    'fmentor3', 'fmentor video_URL'
  ],
  [
    false, 25, false, 'fmentor city', 'fmentor college', 'fmentor country',
    'fmentor email', 'fmentor employer', 'fmentor facebook', 'fmentor first_name',
    'fmentor industry', 'fmentor job_description', 'fmentor last_name',
    'fmentor linkedin', 'fmentor major', 'fakeuserpw',
    'fmentor phone', 'fmentor provide', 1, 2, false, 'fmentor unblock_methods',
    'fmentor4', 'fmentor video_URL'
  ],
  [
    false, 25, false, 'fmentor city', 'fmentor college', 'fmentor country',
    'fmentor email', 'fmentor employer', 'fmentor facebook', 'fmentor first_name',
    'fmentor industry', 'fmentor job_description', 'fmentor last_name',
    'fmentor linkedin', 'fmentor major', 'fakeuserpw',
    'fmentor phone', 'fmentor provide', 1, 2, false, 'fmentor unblock_methods',
    'fmentor5', 'fmentor video_URL'
  ]
]
user_list.each do |admin, age, approved, city, college, country,
                    email, employer, facebook, first_name,
                    industry, job_description, last_name, linkedin, major,
                    password, phone, provide,
                    share_industry_rank, share_major_rank, status,
                    unblock_methods, username, video_URL|
  User.create!(
    admin: admin, age: age, approved: approved, city: city,
    college: college, country: country,
    email: email, employer: employer, facebook: facebook,
    first_name: first_name, industry: industry,
    job_description: job_description, last_name: last_name,
    linkedin: linkedin, major: major,
    password: password, phone: phone,
    provide: provide, share_industry_rank: share_industry_rank,
    share_major_rank: share_major_rank, status: status,
    unblock_methods: unblock_methods, username: username,
    video_URL: video_URL
  )
end

mentee_list = [
  [ false, true, 25, "Miami", "USA", "Aaron", "Mondshine", "facebook",
    "some_email", 2, 1, 3, nil],
  [ false, true, 25, "San Francisco", "USA", "Ravi", "Raval", "google",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Denver", "USA", "Mentee3", "Mentee3Last", "youtube",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Houston", "USA", "Mentee4", "Mentee4Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Boston", "USA", "Mentee5", "Mentee5Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Dover", "USA", "Mentee6", "Mentee6Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Rio", "Brazil", "Mentee7", "Mentee7Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Seattle", "USA", "Mentee8", "Mentee8Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Austin", "USA", "Mentee9", "Mentee9Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "New York", "USA", "Mentee10", "Mentee10Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Richmond", "USA", "Mentee11", "Mentee11Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Belmont", "USA", "Mentee12", "Mentee12Last", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "St. Augustine", "USA", "Mentee13", "MenteeLast", "facebook",
  "some_email", 2, 1, 3, nil],
  [ false, true, 25, "Ft. Lauderdale", "USA", "Mentee14", "MenteeLast", "facebook",
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
