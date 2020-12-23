
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView, 
  ScrollView,
  FlatList,
} from "react-native";
import { color } from "../config/color";
import {  FontSize, setResponsiveWidth } from "../config/dimensions";
import ProductView from "../components/ProductView";
import {connect} from 'react-redux'
import { store } from "../redux/store";
import { UPDATE_CART, UPDATE_PRODUCT } from "../redux/type";
import { createStructuredSelector } from 'reselect'
import { selectCartList, selectProductList } from "../redux/selector";

class ProductListScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
     
    }  
  }

  
  addPress = (item) =>{
    let product_list = [...this.props.product_list]
    let cart_list = [...this.props.cart_list]
    
    product_list = product_list.map((product)=>{
      if(item._id == product._id){
        product['count'] = product['count'] + 1
        
      }
      return product
    })
    store.dispatch({type:UPDATE_PRODUCT,payload:product_list})

    if(item.is_cart==1){
      cart_list = cart_list.map((cart)=>{
        if(item._id == cart._id){
          
          cart['count'] = item['count']
          
        }
        return cart
      })
      store.dispatch({type:UPDATE_CART,payload:cart_list || []})

    }
  }

  removePress = (item) =>{
    let product_list = [...this.props.product_list]
    let cart_list = [...this.props.cart_list]

    if(item['count']==1){
      return;     
    }
    product_list = product_list.map((product)=>{
      if(item._id == product._id){
        
        product['count'] = product['count'] - 1
        
      }
      return product
    })
    store.dispatch({type:UPDATE_PRODUCT,payload:product_list})
    
    if(item.is_cart==1){
      cart_list = cart_list.map((cart)=>{
        if(item._id == cart._id){
          
          cart['count'] = item['count']
          
        }
        return cart
      })
      store.dispatch({type:UPDATE_CART,payload:cart_list || []})
    }
    
  }

  removeFromCart = (item) =>{
    let product_list = [...this.props.product_list]
    let cart_list = [...this.props.cart_list]

    product_list = product_list.map((product)=>{
      if(item._id == product._id){
        
        product['is_cart'] = 0
        product['count'] = 1
        
      }
      return product
    })

    cart_list = cart_list.filter((cart)=>{
      if(item._id == cart._id){
        return false
      }
      return true
    })

    store.dispatch({type:UPDATE_PRODUCT,payload:product_list})
    store.dispatch({type:UPDATE_CART,payload: cart_list || []})

  }

  addToCart = (item) =>{
    let product_list = [...this.props.product_list]
    let cart_list = [...this.props.cart_list]

    product_list = product_list.map((product)=>{
      if(item._id == product._id){
        
        product['is_cart'] = 1
        
      }
      return product
    })
    cart_list.push(item)
    store.dispatch({type:UPDATE_PRODUCT,payload:product_list})
    store.dispatch({type:UPDATE_CART,payload:cart_list || []})

  }

  renderBody = () =>{
      
    return <View style={{flexGrow:1,flex:1}}>
                

                  <FlatList 
                  
                    extraData={this.state}
                    data={this.props.product_list}
                    contentContainerStyle={{flex:1}}
                    renderItem={({item,index})=><View style={{marginTop:setResponsiveWidth(2)}}>
                    <ProductView onPress={()=>{}} 
                                {...item}
                                key={index}
                                addPress={()=>{this.addPress(item)}}
                                removePress={()=>{this.removePress(item)}}
                                addToCart={()=>{this.addToCart(item)}}
                                removeFromCart={()=>{this.removeFromCart(item)}} 
                               />

                  </View>}
                  ItemSeparatorComponent={()=>
                  <View style={{height:setResponsiveWidth(4),backgroundColor:'#F2F4F4'}}/>}
                  ListEmptyComponent={()=><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:FontSize(2)}}>No product available</Text>
                  </View>}
                  />
                  
                
           </View>
  }
 
  render() {

    return (
      <SafeAreaView style={{flex:1,backgroundColor:color.bg_color}}>
          <ScrollView contentContainerStyle={{flexGrow:1,}} style={{backgroundColor:color.bg_color}}>

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
  cart_list: selectCartList

})

export default connect(mapStateToProps,null)(ProductListScreen);