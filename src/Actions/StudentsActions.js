import {
    getAllStudents as getAllStudentsAPI,
    createStudent,
    removeStudent as removeStudentAPI,
    rate as rateAPI,
    unRate as unRateAPI
} from '../Api/Students.js';

export function addStudent(name, className) {
    let student = {
        name, 
        stars: 0
    };
    
    createStudent(student, className);

    return {
        type: "ADD_STUDENT",
        payload: student
    }
}

export function removeStudent(name, className){
    removeStudentAPI(name, className);

    return {
        type: "REMOVE_STUDENT",
        payload: name
    }
}

export async function getAllStudents(name){
    return {
        type: "ADD_STUDENTS",
        payload: await getAllStudentsAPI(name)
    }
}

export function rate(name, className){
    rateAPI(name, className);

    return {
        type: "RATE",
        payload: {
            name
        }
    }
}

export function unRate(name, className){
    unRateAPI(name, className);

    return {
        type: "UNRATE",
        payload: {
            name
        }
    }
}

