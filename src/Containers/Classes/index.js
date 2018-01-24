import {
  StackNavigator,
} from 'react-navigation';
import MainContainer from './ClassesContainer';
import Students from '../Students/index';

export default StackNavigator({
    Home: {screen : MainContainer},
    Students: {screen: Students}
},{
    headerMode: 'none'
});