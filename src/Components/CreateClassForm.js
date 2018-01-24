
import React, {Component} from 'react';
import { 
  Container, 
  View,
  Form,
  Item,
  Button, 
  Right, 
  Input,
  Text,
  Label
} from 'native-base';

export default class createClassForm extends Component {
  constructor(){
    super();
    this.state = {
        text: null
    };
  }

  render(){
    const {submit, onCancel} = this.props;
    return (
      <View>

        <Form>
          <Item floatingLabel style={{marginRight: 10}}>
            <Label>Nome</Label>
              <Input onChangeText = {text => this.setState({text})}/>
            </Item>
        </Form>

        <Button 
          full  
          style={{top: 15, margin: 5, borderRadius: 4}}
          onPress={() => { 
            if(this.state.text !== null && this.state.text !== ""){
              submit(this.state.text) 
              onCancel();
            }
          }}  
        >
          <Text>Inserir</Text>
        </Button>

        <Button 
          full 
          bordered 
          danger 
          style={{top: 15, margin: 5, borderRadius: 4}}
          onPress={()=> onCancel()}
        >
              <Text>Cancelar</Text>
        </Button>
        
      </View>
    );
  }

};

