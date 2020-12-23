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
import { useDimensionsChange,} from "react-native-responsive-dimensions";
import { FontSize, setResponsiveWidth } from "../config/dimensions";
import { color } from "../config/color";

export default SmallButtonWithoutComponent = (props) =>{
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <TouchableOpacity disabled={props.disabled} onPress={()=>props.onPress()} style={[{        
                                             width:setResponsiveWidth(30),
                                             paddingHorizontal:setResponsiveWidth(5),
                                             alignItems:'center',
                                             height:setResponsiveWidth(10),
                                             justifyContent:'space-around',
                                             borderWidth:1,borderColor:color.text_input_border,borderRadius:setResponsiveWidth(1),
                                             flexDirection:'row'},props.style]}>
                                    
                                    <View>
                                    <Text style={[{fontSize:FontSize(2),color:color.text_color_black1},props.textStyle]}>{props.title}</Text>

                                    </View>
            </TouchableOpacity>
}