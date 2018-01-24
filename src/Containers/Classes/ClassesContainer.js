import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert, AsyncStorage} from 'react-native';
import ListItem from '../../Components/ListItem';
import Structure from '../../Components/Structure';
import Modal from 'react-native-modal'
import CreateClassForm from '../../Components/CreateClassForm';
import { addClass, removeClass, getAllClasses, setTargetClass } from '../../Actions/ClassesActions';
import ClassesListView from '../../Components/ClassesList';

import { 
  Container, 
  List,
  Header, 
  Title, 
  Fab,
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text 
} from 'native-base';


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false
    }
  }
  
  componentWillMount(){
    this.props.getAllData();
  }
  
  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { navigate} = this.props.navigation;
    return (
      <Structure 
        title="Professor Stars"
        subtitle="Disciplinas"
        
        fab={
            <Fab
              direction="up"
              position="bottomRight"
              onPress={() => this.toggleModal()}
              style={{right: -10, backgroundColor: "#01579B", position: 'absolute'}}
            >
              <Icon
                name="md-add"
              />
          </Fab>
        }
      > 
          <ClassesListView 
            redirect={() => navigate("Students")} 
            setTargetClass={(name) => this.props.setTargetClass(name)}
            classes={this.props.classes}  
            remove={name => this.props.remove(name)}
          />

          <Modal 
            isVisible={this.state.modal} 
            onBackButtonPress={() => this.toggleModal() }
          >
            <View style={{backgroundColor:'#fff', height: 206, borderRadius: 4}}>
              <CreateClassForm 
                onCancel={() => this.toggleModal()}
                submit={(value) => this.props.add(value) }
              />
            </View>
          </Modal>
      </Structure>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        classes: state.classes.classes
    }
};



let mapDispatchToProps = (dispatch) => {
    return {
      add: value => {
        dispatch(addClass(value))
      },
      remove: value => {
        dispatch(removeClass(value))
      },
      getAllData:() => {
        dispatch(getAllClasses());
      },
      setTargetClass: (name) => {
        dispatch(setTargetClass(name))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
