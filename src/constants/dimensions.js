import { Dimensions, PixelRatio, Platform } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const _height = Dimensions.get('window').height;
const _width = Dimensions.get('window').width;
// const IS_IPHONE_X = !!(
//   Platform.OS === ios &&
//   (_height > 800 || _width > 800)
// );
// const IS_IPHONE = !!(Platform.OS === ios);
const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const DesignWidth = 390;
const DesignHeight = 844;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const DeviceWidthRatioDesignWidth = DeviceWidth / DesignWidth;
const DeviceHeightRatioDesignHeight = DeviceHeight / DesignHeight;
const ResponsiveWidth = width => {
  return PixelRatio.roundToNearestPixel(width * DeviceWidthRatioDesignWidth);
};
const ResponsiveHeight = height => {
  return PixelRatio.roundToNearestPixel(height * DeviceHeightRatioDesignHeight);
};
const ResponsiveFontSize = fontSize => {
  return PixelRatio.roundToNearestPixel(
    fontSize * DeviceHeightRatioDesignHeight,
  );
};
export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  ResponsiveWidth as rwp,
  ResponsiveHeight as rhp,
  ResponsiveFontSize as rfs,
  _height as height,
  _width as width,
  // IS_IPHONE_X,
  // IS_IPHONE,
};
// import { Dimensions, PixelRatio, Platform } from ‘react-native’;
// // Retrieve initial screen’s width
// let screenWidth = Dimensions.get(‘window’).width;
// // Retrieve initial screen’s height
// let screenHeight = Dimensions.get(‘window’).height;
// const MOB_TAB_WIDTH_RATIO = 0.7;
// const MOB_TAB_HEIGHT_RATIO = 0.84;
// const height = Dimensions.get(‘window’).height;
// const width = Dimensions.get(‘window’).width;
// const aspectRatio = height / width;
// const isPAD = !(aspectRatio > 1.6);
// const isIPHONEX = !!(
//   Platform.OS === ‘ios’ &&
//   (height > 800 || width > 800)
// );
// const isIPHONE = !!(Platform.OS === ‘ios’);
// const widthPercentageToDP = (widthPercent) => {
//   // Parse string percentage input and convert it to number.
//   const elemWidth =
//     typeof widthPercent === ‘number’ ? widthPercent : parseFloat(widthPercent);
//   // Use PixelRatio.roundToNearestPixel method in order to round the layout
//   // size (dp) to the nearest one that correspons to an integer number of pixels.
//   return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
// };
// const wpForTab = (widthPercent, ratio = null) => {
//   let width = isPAD ? Math.floor(widthPercent * (ratio ? ratio : MOB_TAB_WIDTH_RATIO)) : widthPercent;
//   return widthPercentageToDP(width);
// };
// const hpForTab = (heightPercent, ratio = null) => {
//   let height = isPAD ? Math.floor(heightPercent * (ratio ? ratio : MOB_TAB_HEIGHT_RATIO)) : heightPercent;
//   return heightPercentageToDP(height);
// };
// const heightPercentageToDP = (heightPercent) => {
//   // Parse string percentage input and convert it to number.
//   const elemHeight =
//     typeof heightPercent === ‘number’
//       ? heightPercent
//       : parseFloat(heightPercent);
//   // Use PixelRatio.roundToNearestPixel method in order to round the layout
//   // size (dp) to the nearest one that correspons to an integer number of pixels.
//   return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
// };
// export {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   wpForTab as wpt,
//   hpForTab as hpt,
//   height,
//   width,
//   isIPHONEX,
//   isIPHONE,
//   isPAD
// };