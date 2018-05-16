/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component  } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import CustomButton from './components/customButton'

import {evaluateInput, operandInput, clearScreen, numberInput} from './actions'

class App extends Component {
  

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style = {styles.headerText}>Calculator</Text>
        </View>
        <View style={styles.displayContainer}>
          <Text style={[
            styles.welcome, 
            {fontSize:this.props.evaluator.isResultToBeDisplayed?20:50}
          ]}>
            {this.props.evaluator.evalExp}
          </Text>
          <Text style={[styles.welcome, {justifyContent: 'flex-end'}]}>
            {this.props.evaluator.isResultToBeDisplayed ? '= ' + this.props.evaluator.result : '' }
          </Text>
        </View>
        <View style = {styles.inputContainerHolder}>
          <View style={styles.inputContainer}>
            <CustomButton value='1' evaluateInp={this.props.numberInput} />
            <CustomButton value='2' evaluateInp={this.props.numberInput} />
            <CustomButton value='3' evaluateInp={this.props.numberInput} />
            <CustomButton value='*' evaluateInp={this.props.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='4' evaluateInp={this.props.numberInput} />
            <CustomButton value='5' evaluateInp={this.props.numberInput} />
            <CustomButton value='6' evaluateInp={this.props.numberInput} />
            <CustomButton value='/' evaluateInp={this.props.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='7' evaluateInp={this.props.numberInput} />
            <CustomButton value='8' evaluateInp={this.props.numberInput} />
            <CustomButton value='9' evaluateInp={this.props.numberInput} />
            <CustomButton value='+' evaluateInp={this.props.operandInput} />
          </View>
          <View style={styles.inputContainer}>
            <CustomButton value='C' evaluateInp={this.props.clearScreen} />
            <CustomButton value='0' evaluateInp={this.props.numberInput} />
            <CustomButton value='-' evaluateInp={this.props.operandInput} />
            <CustomButton value='=' evaluateInp={this.props.evaluateInput} />
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
  
});



function mapStateToProps(state){
  return{
    evaluator: state.evaluator
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    evaluateInput:evaluateInput,
    clearScreen:clearScreen,
    numberInput:numberInput,
    operandInput: operandInput
  },dispatch)
}


// export const Main = connect(state=>({calculatorState:state}),dispatch=>bindActionCreators({
//   pressNumWithDispatch:pressNum,
//   enterAction:enter,
//   operationAction:operation
// },dispatch,),)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App)
