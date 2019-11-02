import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
      //width: `${width}px`, //avoid "JSON value '414px' of type NSString cannot be converted to a ABI35_0_0YGValue" error
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },
};

const HomeScreen = props => (
  <View style={styleSheet.container}>
    <Text style={styleSheet.textStyle}>Hello!</Text>
  </View>
);

HomeScreen.propTypes = {};

export default HomeScreen;
