import React from 'react';
import { StyleSheet, Text, View, SafeAreaView ,TextInput } from 'react-native';

const currencyPerRuppe= {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND:0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041

}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      inputValue: "",
      resultValue:"0.0"
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={{ flex:1 , marginTop:20}}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {this.state.resultValue}
        </Text>        
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor="#fff"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={inputValue => this.setState({
              inputValue
            })  }
          />
        </View>
      </View>
       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#badc57',

  },
  resultContainer: { 
    marginTop: 20, 
    height:70 ,
     backgroundColor:"blue",
      borderWidth: 2 ,
      borderColor:"#c1c1c1",
      justifyContent: "center", 
      alignItems:"center"
    },
    resultText: {
      color:"#fff",
      fontWeight: "bold",
      fontSize: 30
    },
    input: {

    }
});
