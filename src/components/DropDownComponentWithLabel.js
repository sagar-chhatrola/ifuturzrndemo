import React, { Component,useCallback, useState } from "react";

import {
    View,
    Text,
    Image,
    LayoutAnimation
  } from "react-native";
import { useDimensionsChange } from "react-native-responsive-dimensions";
import {  setResponsiveWidth } from "../config/dimensions";
import { image } from "../config/image";
import { color } from "../config/color";
import DropDownPicker from 'react-native-dropdown-picker';

export default DropDownComponentWithLabel = (props) =>{
    const [value,setValue] = useState(props.value)
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );

    return <View>
            <Text style={{color:color.grey,fontWeight:'bold'}}>{props.label}</Text>
            <DropDownPicker
                onRef={(ref)=>props.onRef?props.onRef(ref):null}
                placeholder={props.placeholder}
                leftImage={props.leftImage}
                items={props.items}
                defaultValue={value}
                containerStyle={{marginTop:setResponsiveWidth(1.5),height: setResponsiveWidth(11),borderColor: color.text_input_border,borderRadius:setResponsiveWidth(1),borderWidth:1,}}
                style={{backgroundColor: color.white,borderWidth:1,borderColor: color.text_input_border,borderRadius:setResponsiveWidth(1)}}
                dropDownStyle={{backgroundColor: color.white,}}
                labelStyle={{color:color.text_input_color}}
                onChangeItem={item => {setValue(item.value);props.onChangeValue&&props.onChangeValue(item.value) }
                }
                customArrowUp={()=><Image source={image.down_arrow} />}
                customArrowDown={()=><Image source={image.down_arrow} />}
            />
            </View>
}
