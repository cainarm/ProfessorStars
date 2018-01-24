import {
  StackNavigator,
} from 'react-navigation';
import Students from './StudentsContainer';

export default StackNavigator({
    Students: {screen : Students},
},{
    headerMode: 'none'
});