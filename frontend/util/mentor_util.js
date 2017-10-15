export const fetchMentors = (data, success, error) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data
  })
);

export const fetchMentor = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const createMentor = mentor => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {mentor}
  })
);

export const deleteMentor = (mentor, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${mentor.id}`,
    success,
    error
  })
);
