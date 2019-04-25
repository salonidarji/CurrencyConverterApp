import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>        
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
});
