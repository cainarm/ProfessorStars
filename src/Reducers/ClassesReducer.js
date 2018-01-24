
const defaultState = {
    classes: [],
    targetClass: null
};

export default ClassesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CLASS": 
            state = {
                ...state,
                classes : [
                    ...state.classes,
                    action.payload
                ]
            }
            break;
        case "ADD_CLASSES": 
            state = {
                ...state,
                classes : [
                    ...action.payload
                ]
            }
            break;
        case "REMOVE_CLASS": 
            state = {
                ...state,
                classes : state.classes.filter(classes => classes.name !== action.payload)
            }
            break;
        case "SET_TARGET_CLASS": 
            state = {
                ...state,
                targetClass: action.payload
            }
            break;
    }
    return state;
};

