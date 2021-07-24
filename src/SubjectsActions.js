const addSubject = subjectsIndex => (
  {
    type: 'SELECT_SUBJECT',
    payload: subjectsIndex,
  }
);

const createSubject = subject => (
  {
    type: 'CREATE_SUBJECT',
    subject: subject
  }
)

export {addSubject, createSubject}