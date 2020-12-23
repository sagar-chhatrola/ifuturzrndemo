import React, { Component,useCallback, useState } from "react";

import {
    View,
    Text,
    LayoutAnimation,
    Image,
  } from "react-native";
import { useDimensionsChange } from "react-native-responsive-dimensions";

import { FontSize, setResponsiveWidth } from "../config/dimensions";
import { color } from "../config/color";
import SmallButtonWithoutComponent from "./SmallButtonWithoutComponent";


export default CartView = (props) =>{
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <View onPress={()=>{}} style={{flexDirection:'row',
              // alignItems:'center',
              marginHorizontal:setResponsiveWidth(4),
              paddingVertical:setResponsiveWidth(2)}}>
                                <View style={{flex:7,flexDirection:'row',alignItems:'center'}}>
                                   
                                   <View style={{}}>
                                            <Image source={{uri:props.product_image}} resizeMode="contain" style={{
                                              height:setResponsiveWidth(20),
                                              width:setResponsiveWidth(20)}} />
                                   </View>
                                   <View style={{marginLeft:setResponsiveWidth(6)}}>
                                    <Text style={{fontSize:FontSize(2.2),fontWeight:'bold',color:color.text_color_black}}>{props.product_name}</Text>
                                    <Text style={{fontSize:FontSize(2),fontWeight:'600',color:'#A1A1A2'}}>{props.small_description}</Text>
                                    <View style={{alignItems:'center',flexDirection:'row'}}>

                                    <Text style={{fontSize:FontSize(2),fontWeight:'600',color:'#51C6ED'}}>${props.discounted_price} * {props.count}</Text>
                                    <Text style={{textDecorationLine:'line-through',paddingLeft:setResponsiveWidth(2),fontSize:FontSize(1.6),fontWeight:'600',color:'#A1A1A2'}}>${props.original_price}</Text>

                                    </View>
                                    

                                   </View>

                                </View>
                                <View style={{flex:3}}>
                                {props.is_cart==1?<SmallButtonWithoutComponent onPress={()=>{props.removeFromCart()}} 
                                    title="Remove from cart" 
                  style={{height:setResponsiveWidth(11),
                    width:setResponsiveWidth(30),borderColor:color.main,
                    backgroundColor:color.main,borderRadius:setResponsiveWidth(6)}}
                  textStyle={{color:color.white,fontSize:FontSize(1.8)}}/>:
                  <SmallButtonWithoutComponent onPress={()=>{props.addToCart()}} title="Add to cart" 
                  style={{height:setResponsiveWidth(11),
                    width:setResponsiveWidth(30),borderColor:color.main,
                    backgroundColor:color.main,borderRadius:setResponsiveWidth(6)}}
                  textStyle={{color:color.white,fontSize:FontSize(1.8)}}/>}
                                </View>
           
                            </View>
                                  
}