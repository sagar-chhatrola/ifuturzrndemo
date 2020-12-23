import {Dimensions, } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  
  
} from "react-native-responsive-dimensions";


const Width = widthPercent => {
  return responsiveWidth(widthPercent);
};

const Height = heightPercent => {
  return responsiveHeight(heightPercent);
};

const setResponsiveWidth = heightPercent => {
  const {height,width} = Dimensions.get('window')
  return height>width?responsiveWidth(heightPercent):responsiveHeight(heightPercent)
   
};

const FontSize = (size) => {
  return responsiveFontSize(size) 
}


export {
  Width,
  Height,
  FontSize,
  setResponsiveWidth
};