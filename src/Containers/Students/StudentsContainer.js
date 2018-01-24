import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert, ListView } from 'react-native';
import ListItem from '../../Components/StudentListItem';
import Structure from '../../Components/Structure';
import Modal from 'react-native-modal'
import CreateClassForm from '../../Components/CreateClassForm';
import { addStudent, removeStudent, getAllStudents, rate, unRate} from '../../Actions/StudentsActions';
import _ from 'underscore';
import { NavigationActions} from 'react-navigation';
import { 
  Container, 
  List,
  Header, 
  Title, 
  Fab,
  Content, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text 
} from 'native-base';

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    color: '#D50000'
  },
});

class Index extends React.Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => _.isMatch(r1, r2) });
    this.state = {
      students: this.ds.cloneWithRows(props.students),
      modal: false
    }
  }

  componentWillMount() {
    this.props.getAllStudents(this.props.targetClass);
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        students: this.ds.cloneWithRows(nextProps.students)
      });
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Structure 
        title="Professor Stars"
        subtitle="Alunos"
        hasBackButton={true}
        backButtonAction={() => this.props.navigation.dispatch(NavigationActions.back())}
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
          <ListView 
            style={{marginBottom: 60}}
            dataSource = {this.state.students}
            renderRow = { ({name, stars}) => {
              return (
                <ListItem 
                  remove = {() => {
                    Alert
                    .alert(
                      "Aviso", 
                      "Tem certeza que deseja deletar este aluno ?",
                      [
                        {text: "Cancelar", onPress: () => null},
                        {text: "Sim ", onPress: () => this.props.remove(name, this.props.targetClass),},
                      ],
                        {cancelable: true}
                    )
                  }}
                  stars={stars}
                  rate={() => this.props.rate(name, this.props.targetClass)}
                  unRate={() => this.props.unRate(name, this.props.targetClass)}
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
          <Modal 
            isVisible={this.state.modal} 
            onBackButtonPress={() => this.toggleModal() }
            
          >
            <View style={{backgroundColor:'#fff', height: 206, borderRadius: 4}}>
              <CreateClassForm 
                onCancel={() => this.toggleModal()}
                submit={(value) => this.props.add(value, this.props.targetClass) }
              />
            </View>
          </Modal>
      </Structure>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        students: state.students.students,
        targetClass: state.classes.targetClass
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
      add: (value, name)  => {
        dispatch(addStudent(value, name));
      },
      remove: (value, name) => {
        dispatch(removeStudent(value, name));
      },
      getAllStudents: value => {
        dispatch(getAllStudents(value));
      },
      rate: (name, className) => {
        dispatch(rate(name, className));
      },
      unRate: (name, className) => {
        dispatch(unRate(name, className));
      }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
