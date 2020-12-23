
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { color } from "../config/color";
import { setResponsiveWidth } from "../config/dimensions";
import SmallButtonWithoutComponent from "../components/SmallButtonWithoutComponent";

class LandingScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
      
    }  
  }

 
  renderBody = () =>{
      
    return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              
              <View>
                  <SmallButtonWithoutComponent onPress={()=>{this.props.navigation.navigate('AddProduct')}} 
                              title="Add Product" 
                              style={{height:setResponsiveWidth(11),width:setResponsiveWidth(35),
                              borderColor:color.main,backgroundColor:color.main,
                              borderRadius:setResponsiveWidth(6)}}
                              textStyle={{color:color.white}}/>
              </View>

              <View>
                  <SmallButtonWithoutComponent onPress={()=>{this.props.navigation.navigate('ProductList')}} 
                              title="Show Product List" 
                              style={{marginTop:setResponsiveWidth(5),height:setResponsiveWidth(11),
                              width:setResponsiveWidth(45),borderColor:color.main,
                              backgroundColor:color.main,borderRadius:setResponsiveWidth(6)}}
                              textStyle={{color:color.white}}/>
              </View>

              <View>
                  <SmallButtonWithoutComponent onPress={()=>{this.props.navigation.navigate('Cart')}} 
                              title="Go to cart" 
                              style={{marginTop:setResponsiveWidth(5),height:setResponsiveWidth(11),
                              width:setResponsiveWidth(35),borderColor:color.main,
                              backgroundColor:color.main,borderRadius:setResponsiveWidth(6)}}
                              textStyle={{color:color.white}}/>
              </View>
           </View>
  }
 
  render() {

    return (
      <SafeAreaView style={{flex:1,backgroundColor:color.white}}>

            <View style={{flex:1,justifyContent:'center'}} >
              
              {this.renderBody()}

            </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 
});


export default LandingScreen;