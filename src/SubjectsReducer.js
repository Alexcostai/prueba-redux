const INITIAL_STATE = {
  current: [],
  all_subjects: [
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
  ],
};

const subjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_SUBJECT':
      const addedSubject = state.all_subjects.splice(action.payload, 1);
      state.current.push(addedSubject);
      return { current: [...state.current], all_subjects: [...state.all_subjects] }
    case 'CREATE_SUBJECT':
      const exists = state.all_subjects.some(sub => sub===action.subject);
      if(exists){
        alert('The subject already exists');
        return state
      }
      state.all_subjects.push(action.subject)
      return { current: state.current, all_subjects: [...state.all_subjects] }
    default:
      return state
  }
};

export default subjectsReducer