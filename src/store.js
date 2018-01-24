import {createStore, combineReducers, applyMiddleware} from "redux";
import classes from './Reducers/ClassesReducer';
import students from './Reducers/StudentsReducer';
import asyncAwait from 'redux-async-await';

export default createStore(
    combineReducers({
        classes,
        students
    }),
    {},
    applyMiddleware(asyncAwait)
);

