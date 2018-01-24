import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { 
  ListItem,
  Text,
  Left,
  Button,
  Body,
  View,
  Right
} from 'native-base';

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0.5,
    borderColor: '#E0E0E0', 
    borderRadius: 3, 
    margin: 5, 
    marginRight: 15 
  },
  text: {
    left: 10,
    fontSize: 22, 
    fontWeight: '100', 
    color: '#424242', 
    fontFamily: 'sans-serif-thin'
  }
});

export default class Lt extends Component{
    constructor(props){
        super(props);
        this.state = {
            pressed: false
        }
    }   

    redirect(){
        if(!this.state.pressed){
            this.props.redirect();

            this.setState({
                pressed: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        pressed: false
                    });
                }, 1400);
            });
        }
    }

    render(){
        const { children, icon, onDeleteButtonClick } = this.props;
        return (
            <ListItem 
                style={styles.listItem}
                dis
                onPress={() => this.redirect()}
            >
                <Left>
                    <View>
                        <Text style={styles.text}>
                            {children}
                        </Text>
                    </View>
                </Left>
                <Right>
                    {icon && (
                        <Button 
                            danger 
                            bordered 
                            onPress={ () => onDeleteButtonClick() }
                        >
                            {icon}
                        </Button>
                    )}
                </Right>
            </ListItem>
        )
    }
};

