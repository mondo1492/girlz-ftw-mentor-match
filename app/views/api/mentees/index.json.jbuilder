@mentees.each do |mentee|
  json.set! mentee.id do
    json.partial! 'api/mentees/mentee', mentee: mentee
  end
end
