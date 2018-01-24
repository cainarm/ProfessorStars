import React, { Component } from 'react';
import { Alert, ListView, StyleSheet } from 'react-native';
import ListItem from '../Components/StudentListItem';
import {  
  Icon, 
} from 'native-base';

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    color: '#D50000'
  },
});

export default class StudentList extends Component{
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.name !== r2.name });
        this.state = {
            students: this.ds.cloneWithRows(props.students)
        }
    }
    
    componentWillReceiveProps(nextProps){
      this.setState({
        students: this.ds.cloneWithRows(nextProps.students)
      });
    }

    render(){
        return(
            <ListView 
                style={{marginBottom: 60}}
                dataSource = {this.state.classes}
                renderRow = { ({name, stars}) => {
                return (
                    <ListItem 
                        remove = {() => {
                            Alert
                            .alert(
                            "Aviso", 
                            "Tem certeza que deseja deletar esta disciplina ?",
                            [
                                {text: "Cancelar", onPress: () => null},
                                {text: "Sim ", onPress: () => this.props.remove(name)},
                            ],
                                {cancelable: true}
                            )
                        }}
                        stars={stars}
                        icon={
                            <Icon 
                                name="ios-trash-outline"
                                style={styles.icon} 
                            />
                        }
                    >
                    {name}
                    </ListItem>
                )
                }}
            />
        )
    }
}