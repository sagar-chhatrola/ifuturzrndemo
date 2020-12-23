
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { color } from "../config/color";
import {  setResponsiveWidth } from "../config/dimensions";
import moment from 'moment';
import SmallButtonWithoutComponent from "../components/SmallButtonWithoutComponent";

import { Dropdown } from 'react-native-material-dropdown';
import { launchImageLibrary} from 'react-native-image-picker';
import CommonTextInputWithLabel from "../components/CommonTextInputWithLabel";
import { image } from "../config/image";
import Toast from 'react-native-simple-toast';
import { store } from "../redux/store";
import {  UPDATE_PRODUCT } from "../redux/type";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectProductList } from "../redux/selector";

class AddProductScreen extends Component {
  state = {};
    
  constructor(props){
    super(props);
    this.state = {
      product_name:'',
      small_description:'',
      category:'',
      discounted_price:'',
      original_price:'',
      product_image:''
    }
  }

  selectProductImage = () =>{
    launchImageLibrary({},(response)=>{
      this.setState({product_image:response.uri})
    })
  }

  login = async () =>{
    let {product_name,small_description,category,discounted_price,
    original_price,product_image} = this.state
    if(product_name ==''){
      Toast.show('Please enter a product name');
    }
    else if(small_description==''){
      Toast.show('Please enter a small description');
    }
    
    else if(original_price==''){
      Toast.show('Please enter a original price');
    }
    
    else if(discounted_price==''){
      Toast.show('Please enter a discounted price');
    }

    else if(discounted_price>original_price){
      Toast.show('Discounted price should not be greater than original price');
    }
   
    else if(product_image==''){
      Toast.show('Please select a product image');

    }
    else if(category==''){
      Toast.show('Please select a category');
    }
    else{
      let product_list = [...this.props.product_list]
      product_list.push({
        product_name,small_description,category,discounted_price,
        original_price,product_image,count:1,
        is_cart:0,
        _id: moment().toISOString()
      })

      store.dispatch({type:UPDATE_PRODUCT,payload: product_list})
      this.setState({
        product_name:'',small_description:'',category:'',discounted_price:'',
        original_price:'',product_image:'',
    
      })

      Toast.show('Product added successfully')
      console.log("added")
    }
  }

  renderBody = () =>{
      
    return <View style={{marginTop:setResponsiveWidth(8),flexGrow:1,flex:1,marginHorizontal:setResponsiveWidth(4)}}>

                          <View style={{}}>  
                              <CommonTextInputWithLabel label="Product Name"
                                  containerStyle={{borderWidth:1,borderColor:'#EEEEEE'}} 
                                  style={{paddingLeft:setResponsiveWidth(4)}}
                                  message={this.state.product_name} onChangeText={(product_name)=>this.setState({product_name})} 
                                  placeholder={"Product name"}/>
                          </View>
                          <View style={{marginTop:setResponsiveWidth(2)}}>  
                              <CommonTextInputWithLabel label="Small Discription"
                                  containerStyle={{borderWidth:1,borderColor:'#EEEEEE'}} 
                                  style={{paddingLeft:setResponsiveWidth(4)}}
                                  message={this.state.small_description} onChangeText={(small_description)=>this.setState({small_description})} 
                                  placeholder={"Small Discription"}/>
                          </View>

                          <View style={{marginTop:setResponsiveWidth(2)}}>  
                              <CommonTextInputWithLabel label="Original Price"
                                  containerStyle={{borderWidth:1,borderColor:'#EEEEEE'}} 
                                  style={{paddingLeft:setResponsiveWidth(4)}}
                                  keyboardType="phone-pad"
                                  message={this.state.original_price} onChangeText={(original_price)=>this.setState({original_price})} 
                                  placeholder={"Original Price"}/>
                          </View>

                          <View style={{marginTop:setResponsiveWidth(2)}}>  
                              <CommonTextInputWithLabel label="Discounted Price"
                                  containerStyle={{borderWidth:1,borderColor:'#EEEEEE'}} 
                                  style={{paddingLeft:setResponsiveWidth(4)}}
                                  keyboardType="phone-pad"
                                  message={this.state.discounted_price} onChangeText={(discounted_price)=>this.setState({discounted_price})} 
                                  placeholder={"Discounted Price"}/>

                          </View>

                          <TouchableOpacity onPress={()=>this.selectProductImage()} style={{marginTop:setResponsiveWidth(2)}}>  
                              <Text style={{color:color.grey,fontWeight:'bold'}}>Product Image</Text>
                              <View style={[{marginTop:setResponsiveWidth(1.5),
                                      borderRadius:setResponsiveWidth(6),borderWidth:1,
                                      borderColor: color.text_input_border,alignItems:'center',
                                      flexDirection:'row',height:setResponsiveWidth(50),
                                      backgroundColor:color.white,borderColor:color.text_input_border,},
                                      ]}>
                                  <Image style={{height:'100%',width:'100%'}} 
                                        resizeMode="contain" 
                                        source={this.state.product_image==''?image.product_placeholder:{uri:this.state.product_image}} />
                              
                              </View>
                          </TouchableOpacity>
                          <View style={{marginTop:setResponsiveWidth(2)}}>  

                          <Dropdown data={[
                                      {value:"Cloth"},
                                      {value:"Shoes"},
                                      {value:"Watch"},
                                      {value:"Phone"},
                                      {value:"TV"},
                                    ]}
                                    textInputContainerStyle={{marginTop:setResponsiveWidth(1.5),
                                      alignItems:'center',
                                    borderRadius:setResponsiveWidth(6),borderWidth:1,
                                    borderColor: color.text_input_border,height:setResponsiveWidth(12),
                                    backgroundColor:color.white}}
                                    containerStyle={{borderBottomWidth:0}}
                                    inputContainerStyle={{borderBottomWidth:0}}
                                    pickerStyle={{}} 
                                    style={{}}
                                    value={this.state.category}
                                    onChangeText={(category)=>this.setState({category})}
                                    labelTextStyle={{color:color.grey,fontWeight:'bold',}}
                                    labelFontSize={14}
                                    label="Select Category"  
                                    placeholder={"Select Category"} 
                                    onChangeValue={(category)=>this.setState({category})}
                                  />
                          </View>

                          <View style={[this.state.isVisibleA?{zIndex:0}:{zIndex:100}]}>
                          <View style={{marginTop:setResponsiveWidth(3.5)}}>  

                          
                          </View>

                        <View style={{marginTop:setResponsiveWidth(4),marginBottom:setResponsiveWidth(2),alignSelf:'center'}}>
                                <SmallButtonWithoutComponent onPress={()=>{this.login()}} title="Submit" 
                                textStyle={{color:color.white}}
                                style={{height:setResponsiveWidth(11),width:setResponsiveWidth(35),borderColor:color.main,backgroundColor:color.main,borderRadius:setResponsiveWidth(5)}}/>
                        </View>
                        </View>
                                          
          </View>
  }
 
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:color.white}}>
          <ScrollView contentContainerStyle={{flexGrow:1,}} style={{backgroundColor:color.white}}>

            <View style={{flex:1}}>
              
              {this.renderBody()}
             
            </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 
});


const mapStateToProps = createStructuredSelector({
   
  product_list: selectProductList,

})

export default connect(mapStateToProps,null)(AddProductScreen);