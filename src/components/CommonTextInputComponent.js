import React, { Component, useCallback, useState } from "react";

import {
  View,
  TextInput,
  LayoutAnimation,

  Image,
  TouchableOpacity
} from "react-native";
import { useDimensionsChange } from "react-native-responsive-dimensions";
import { FontSize, setResponsiveWidth } from "../config/dimensions";
import { color } from "../config/color";
import { useDynamicValue } from 'react-native-dynamic'
import dynamicStyles from './../helper/dynamicstyle';

export default CommonTextInputComponent = (props) => {
  const styles = useDynamicValue(dynamicStyles)

  useDimensionsChange(
    useCallback(({ window, screen }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }, [])
  );
  return <View style={{}}>
    <View style={[{ borderRadius: setResponsiveWidth(1), borderWidth: 1, borderColor: color.text_input_border, alignItems: 'center', flexDirection: 'row', height: setResponsiveWidth(11) }, props.containerStyle]}>
      <View style={{ flex: 1.5, alignItems: 'center' }}>
        {props.leftImage ? <Image source={props.leftImage} style={{}} /> : null}
      </View>
      <View style={{ flex: 7 }}>

        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={color.text_input_place_holder_color}
          onChangeText={(text) => { props.onChangeText(text) }}
          value={props.message}
          style={[{ fontSize: FontSize(5), color: color.text_color_black, paddingVertical: 0 }], props.style, styles.text}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType} />

      </View>
      <View style={{ flex: 1.5, alignItems: 'center' }}>
        {props.rightImage ? <TouchableOpacity onPress={() => { props.onPressRightImage && props.onPressRightImage() }}>
          <Image source={props.rightImage} style={{}} />
        </TouchableOpacity> : null}
      </View>
    </View>

  </View>
}