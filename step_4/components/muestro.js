import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import store from '../state/store';

class Muestro extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
          <Text style={styles.text}> Total: {store.getState().counter.total} </Text>       
      </View>
    );
  }
}
 console.log("muestro:" + store.getState().counter.total)
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4A6075',
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default Muestro;