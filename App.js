import React from 'react';
import { StyleSheet, Text, View, SafeAreaView ,TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

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


  btnPressed = (currency) => {
    if(this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let res = parseFloat(this.state.inputValue) * currencyPerRuppe[currency]
    this.setState({ resultValue: res.toFixed(2) })
   
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
      <View style={{ flex:1 , marginTop:20}}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {this.state.resultValue}
        </Text>        
        </View>
        <View style={styles.resultContainer}>
          <TextInput
            style={styles.resultText}
            selectionColor="#fff"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={inputValue => this.setState({
              inputValue
            })  }
          />
        </View>
        <View style={styles.converterBtnContainer}>
        <TouchableOpacity
            style={styles.converterBtn}
            onPress={ () => this.btnPressed("DOLLAR")}
            >
            <Text style={styles.btnText}>DOLLAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>EURO</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>POUND</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>RUBEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>AUSDOLLAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>CANDOLLAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>YEN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>DINAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.converterBtn}
            >
            <Text style={styles.btnText}>BITCOIN</Text>
            </TouchableOpacity>
        </View>
      </View>
       
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3335',

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
    converterBtnContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
      borderColor: "#c1c1c1",
      borderWidth: 2
    },
    converterBtn: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#EC4849",
      height: 100,
      borderColor: "#c1c1c1",
      borderWidth: 2,
      width: "33.33%"
    },
    btnText: {
      color:"#fff",
      fontWeight: "bold",
      fontSize: 20
    }
});
