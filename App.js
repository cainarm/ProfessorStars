import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import {View} from 'react-native';
import MainContainer from './src/Containers/Classes'
import Expo from "expo";

export default class App extends React.Component {  
  constructor(){
    super();
    this.state = {
      isReady: false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return  (
        <Provider store={store}>
            <MainContainer />
        </Provider>
    )
  }

}
