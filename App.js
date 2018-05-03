/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableOpacity
} from 'react-native';

class CustomButton extends Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style= {styles.numberButton}
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

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isResultToBeDisplayed: false,
      evalExp: '',
      result: ''
    }

    this.evaluateInp = (x) => {
      this.setState((prev) => {return {
          isResultToBeDisplayed: true,
          result: eval(prev.evalExp)
      }});
    }

    this.numberInput = (x) => {
      this.setState((prev) => {return {
          isResultToBeDisplayed: false,
          evalExp : !prev.isResultToBeDisplayed ? prev.evalExp + x : x
      }});
    }
    this.operandInput = (x) => {
      this.setState((prev) => {return {
        isResultToBeDisplayed: false,
        evalExp : !prev.isResultToBeDisplayed  
                    ? prev.evalExp == '' ? '0' + x : prev.evalExp + x 
                    : prev.result + x,
        result : ''
      }});
    }
    this.clearScreen = () => {
      this.setState((prev) => {return {
          isResultToBeDisplayed: false,
          evalExp : '',
          result: ''
      }});
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style = {styles.headerText}>Calculator</Text>
        </View>
        <View style={styles.displayContainer}>
          <Text style={[
            styles.welcome, 
            {fontSize:this.state.isResultToBeDisplayed?20:50}
          ]}>
            {this.state.evalExp}
          </Text>
          <Text style={[styles.welcome, {justifyContent: 'flex-end'}]}>
            {this.state.isResultToBeDisplayed ? '= ' + this.state.result : '' }
          </Text>
        </View>
        <View style = {styles.inputContainerHolder}>
          <View style={styles.inputContainer}>
            <CustomButton value='1' evaluateInp={this.numberInput} />
            <CustomButton value='2' evaluateInp={this.numberInput} />
            <CustomButton value='3' evaluateInp={this.numberInput} />
            <CustomButton value='*' evaluateInp={this.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='4' evaluateInp={this.numberInput} />
            <CustomButton value='5' evaluateInp={this.numberInput} />
            <CustomButton value='6' evaluateInp={this.numberInput} />
            <CustomButton value='/' evaluateInp={this.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='7' evaluateInp={this.numberInput} />
            <CustomButton value='8' evaluateInp={this.numberInput} />
            <CustomButton value='9' evaluateInp={this.numberInput} />
            <CustomButton value='+' evaluateInp={this.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='C' evaluateInp={this.clearScreen} />
            <CustomButton value='0' evaluateInp={this.numberInput} />
            <CustomButton value='-' evaluateInp={this.operandInput} />
            <CustomButton value='=' evaluateInp={this.evaluateInp} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333'
  },
  instructions: {
    textAlign: 'center',
    color: '#6d6d6d',
    marginBottom: 5,
  },
  displayContainer: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: '#F5FCFF',

  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: '#F5FCFF',

  },
  inputContainerHolder:{
    flex: 12,
    borderTopWidth: 2,
    borderTopColor: '#333333',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    height: 100
  },
  buttonContainer: {
    width: 100,
  },
  numberButton: {
    justifyContent: 'center',
    height: 100
  }
});
