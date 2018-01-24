import { AsyncStorage } from 'react-native';

export async function getAllClasses(){
    try{
        let data = await AsyncStorage.getItem("Classes");

        if(data !== null)
            data = JSON.parse(data);
        else
            data = [];

        return data;

    }catch(err){
        throw err;
    }
}

export async function createClass(cl){
    let data = await getAllClasses();
    data.push(cl);
    
    AsyncStorage.setItem("Classes", JSON.stringify(data));
}

export async function removeClass(name){
    let data = await getAllClasses();
    data = data.filter(element => element.name !== name);

    AsyncStorage.setItem("Classes", JSON.stringify(data));
}