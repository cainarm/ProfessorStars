
const defaultState = {
    students: []
};

export default StudentsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_STUDENT": 
            state = {
                ...state,
                students : [
                    ...state.students,
                    action.payload
                ]
            }
            break;
        case "ADD_STUDENTS": 
            state = {
                ...state,
                students : [
                    ...action.payload
                ]
            }
            break;
        case "REMOVE_STUDENT": 
            state = {
                ...state,
                students : state.students.filter(student => student.name !== action.payload)
            }
            break;
        case "RATE":
            state = {
                ...state, 
                students: state.students.map(student => {
                    if(student.name === action.payload.name){
                        student.stars = student.stars + 1;
                    }

                    return student;
                })
            } 
            break;
        case "UNRATE":
            state = {
                ...state, 
                students: state.students.map(student => {
                    if(student.name === action.payload.name && student.stars > 0){
                        student.stars = student.stars - 1;
                    }
                    return student;
                })
            } 
            break;
    }
    return state;
};

