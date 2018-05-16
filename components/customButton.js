import React, {Component} from 'react'
import PropTypes from 'prop-types';

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

export default class CustomButton extends Component {
  
  render() {
    return (
      <View style={{
        width: 100,
      }}>
        <TouchableOpacity
          style= {{
            justifyContent: 'center',
            height: 100
          }}
          onPress={() => this.props.evaluateInp(this.props.value)}
        >
          <Text style = {{
            alignSelf:'center',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30}}
          >
            {this.props.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

CustomButton.propTypes = {
  evaluateInp: PropTypes.func
}
