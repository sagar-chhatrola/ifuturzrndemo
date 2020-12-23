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
import { useDimensionsChange, useResponsiveHeight, useResponsiveWidth } from "react-native-responsive-dimensions";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { FontSize ,setResponsiveWidth} from "../config/dimensions";
import { color } from "../config/color";

export default LongButtonComponent = (props) =>{
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <TouchableOpacity {...props} onPress={()=>props.onPress()} style={[{justifyContent:'center',alignItems:'center',height:setResponsiveWidth(11),backgroundColor:color.green_button,borderRadius:setResponsiveWidth(1)},props.style]}>
                    <Text style={[{color:color.white,fontSize:FontSize(2),fontWeight:'500'},props.textStyle]}>{props.title}</Text>
           </TouchableOpacity>
}