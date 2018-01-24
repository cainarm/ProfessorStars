import { getAllClasses } from './Classes';
import { AsyncStorage } from 'react-native';

export async function getAllStudents(className){
    try{
        let data = await getAllClasses();
        let students = [];


        //search for students from specific class
        data.forEach(element => {
            if(element.name == className){
                students = element.students;
            }
        });

        return students;

    }catch(err){
        throw err;
    }
}

export async function createStudent(student, className){
    let classes = await getAllClasses();
    let students = await getAllStudents(className);
    students.push(student);


    //mutate te original array, adding the new student
    classes.forEach((element, i) => {
        if(element.name === className){
            classes[i].students = students;
        }
    });
    AsyncStorage.setItem("Classes", JSON.stringify(classes));
}

export async function removeStudent(name, className){
    let classes = await getAllClasses();
    

    //search for specific class
    cl = classes.filter(element => element.name === className);

    //search for student in that class
    let students = cl[0].students.filter(element => element.name !== name);
    
    //mutate the original class, removing the student
    classes.forEach((element, i) => {
        if(element.name === className){
            classes[i].students = students;
        }
    });

    AsyncStorage.setItem("Classes", JSON.stringify(classes));
}

export async function rate(name, className){
    let classes = await getAllClasses();
    let students = await getAllStudents(className);
 
    //find the student in array, and rate him
    students.forEach((student, i) => {
        if(student.name === name){
            students[i].stars = student.stars + 1;
        }
    });

    //mutate the original array with the mutated object
    classes.forEach((cl, i) => {
        if(cl.name === className){
            classes[i].students = students;

        }
    });

    AsyncStorage.setItem("Classes", JSON.stringify(classes));
}

export async function unRate(name, className){
    let classes = await getAllClasses();
    let students = await getAllStudents(className);

    //find the student in array, and unRate him
    students.forEach((student, i) => {
        if(student.name === name && student.stars > 0){
            students[i].stars = student.stars - 1;
        }
    });
    
    //mutate the original array with the mutated object
    classes.forEach((cl, i) => {
        if(cl.name === className){
            classes[i].students = students;

        }
    });

    AsyncStorage.setItem("Classes", JSON.stringify(classes));
}