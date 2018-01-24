import {
    getAllClasses as getAllClassesAPI,
    createClass,
    removeClass as removeClassAPI
} from '../Api/Classes.js';

export function addClass(name) {
    let newClass = { 
        name,
        students: []
    };

    createClass(newClass);

    return {
        type: "ADD_CLASS",
        payload: newClass
    }
}

export function removeClass(name){
    removeClassAPI(name);
    
    return {
        type: "REMOVE_CLASS",
        payload: name
    }
}

export async function getAllClasses(name){
    return {
        type: "ADD_CLASSES",
        payload: await getAllClassesAPI()
    }
}

export function setTargetClass(name){
    return {
        type: "SET_TARGET_CLASS",
        payload: name
    }
}