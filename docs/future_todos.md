TODOS:
password reset
generate table as nicol requested: name, email, city, country, fbook
ActiveRecord::Base.connection.execute("SELECT first_name, last_name, email, city, country, facebook FROM users WHERE users.approved = true")
tests
sorting in admin panel
deal with admin panel approved mentors status column





Thoughts for later:
allow mentors to set which age of mentee they prefer and vice versa
