import React, { Component } from 'react';
import { Alert, ListView, StyleSheet } from 'react-native';
import ListItem from '../Components/ListItem';
import {  
  Icon, 
} from 'native-base';

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    color: '#D50000'
  },
});

export default class ClassesList extends Component{
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.name !== r2.name });
        this.state = {
            classes: this.ds.cloneWithRows(props.classes)
        }
    }
    
    componentWillReceiveProps(nextProps){
      this.setState({
        classes: this.ds.cloneWithRows(nextProps.classes)
      });
    }

    render(){
        return (
            <ListView 
                style={{marginBottom: 60}}
                dataSource = {this.state.classes}
                renderRow = { ({name}) => {
                return (
                    <ListItem 
                    onDeleteButtonClick = {() => {
                        Alert
                        .alert(
                        "Aviso", 
                        "Tem certeza que deseja deletar esta disciplina ?",
                        [
                            {text: "Cancelar", onPress: () => null},
                            {text: "Sim ", onPress: () => this.props.remove(name),},
                        ],
                            {cancelable: true}
                        )
                    }}
                    icon={
                        <Icon 
                            name="ios-trash-outline"
                            style={styles.icon} 
                        />
                    }
                    redirect = {() => {
                        this.props.setTargetClass(name);
                        this.props.redirect();
                    }}
                    >
                    {name}
                    </ListItem>
                )
                }}
            />
        )
    }
}