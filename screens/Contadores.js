import React from 'react';
import {StyleSheet, Text, Button, View, ScrollView}  from 'react-native';
//import Contador from '../components/Contador';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import Controls from '../step_4/components/Controls';
import CounterContainer from '../step_4/components/CounterContainer';
import store from '../step_4/state/store';
import MuestroTot from '../step_4/components/muestro';

const util = require('util');


class Contadores extends React.Component {


  render(){

      let arrayTot

      return(
      <View style={styles.container}>

        <ReduxProvider store={store}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Nuevo Total
            </Text>

            <Controls />

            <ScrollView style={styles.scrollViewContainer}>
              <CounterContainer />
            </ScrollView>
            <MuestroTot />

          </View>
        </ReduxProvider>
          <Button
          onPress={() => this.props.navigation.navigate('Totales')}
          title= "Guardar "
          />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  title: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 0,
  },

  scrollViewContainer: {
    flex: 1,
  },

});

export default Contadores;
