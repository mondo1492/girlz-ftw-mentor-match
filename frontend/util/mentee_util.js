export const fetchMentees = (data, success, error) => (
  $.ajax({
    method: 'GET',
    url: '/api/mentees',
    data
  })
);

export const fetchMentee = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/mentees/${id}`
  })
);

export const createMentee = mentee => (
  $.ajax({
    method: 'POST',
    url: '/api/mentees',
    data: {mentee}
  })
);

export const updateMentee = mentee => (
  $.ajax({
    method: 'PATCH',
    url: `/api/mentees/${mentee.id}`,
    data: {mentee}
  })
);

export const deleteMentee = (mentee, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/mentees/${mentee.id}`,
    success,
    error
  })
);
