import React, { Component,useCallback, useState } from "react";

import {
    View,
    Text,
    TextInput,
    LayoutAnimation,
    Button,
    Image,
    TouchableOpacity
  } from "react-native";
import { useDimensionsChange, } from "react-native-responsive-dimensions";
import {  useDynamicValue } from 'react-native-dynamic'
import { FontSize, setResponsiveWidth } from "../config/dimensions";
import { color } from "../config/color";
import dynamicStyles from './../helper/dynamicstyle';

export default CommonTextInputWithLabel = (props) =>{
    //const [dairyText,setDairyText] = useState(props.message) 
    const styles = useDynamicValue(dynamicStyles)

    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <View style={{}}>
                <Text style={{color:color.grey,fontWeight:'bold'}}>{props.label}</Text>
                <View style={[{marginTop:setResponsiveWidth(1.5),borderRadius:setResponsiveWidth(6),borderWidth:1,borderColor: color.text_input_border,alignItems:'center',flexDirection:'row',height:setResponsiveWidth(12),backgroundColor:color.white,borderColor:color.white,},props.containerStyle]}>
                {props.leftImage?<View style={{flex:1.5,alignItems:'center'}}>
                        {props.leftImage?<Image source={props.leftImage} style={{}} />:null}
                    </View>:null}
                    <View style={{flex:7}}>
                      
                        <TextInput placeholder={props.placeholder} 
                                   placeholderTextColor={color.text_input_place_holder_color}
                                   onChangeText={(text)=>{props.onChangeText(text)} }
                                   value={props.message} 
                                   style={[{fontSize:FontSize(1.8),color:color.text_color_black,paddingVertical:0},props.style,styles.text]}
                                   secureTextEntry={props.secureTextEntry}
                                   keyboardType={props.keyboardType}
                                   {...props} />
                    
                    </View>
                    {props.rightImage?<TouchableOpacity onPress={()=>{if(props.onPressRightImage){props.onPressRightImage()}}} style={{flex:1.5,alignItems:'center'}}>
                        {props.rightImage?<Image source={props.rightImage} style={{}} />:null}
                    </TouchableOpacity>:null}
                </View>
                
           </View>
}