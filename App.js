import React from 'react';
import  { UnAuthStack } from './src/navigation';
import { navigationRef } from './src/services/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { store,persistor } from './src/redux/store';


class App extends React.Component  {
  
  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  componentDidMount(){
    
  }

  renderApp = () =>{
    return <UnAuthStack />
  }

  render(){
    return  <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>

                <NavigationContainer ref={navigationRef}>
                    {this.renderApp()}
                </NavigationContainer>
              </PersistGate>
            </Provider>
  }
}


export default App;

