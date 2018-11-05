import React from 'react';
import {StyleSheet, Text,Button, View, ScrollView} from 'react-native';
import MuestroTot from '../step_4/components/muestro';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../step_4/state/store';
const util = require('util');


class Totales extends React.Component {

    render() {
        return (
        <ReduxProvider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>TOTALES</Text>
          <ScrollView>
            <MuestroTot />
          </ScrollView>
          <Button
          title="Agregar"
          onPress={() => this.props.navigation.navigate('Contadores')}
          />
        </View>
        </ReduxProvider>
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
      paddingTop: 20,
    },

    scrollViewContainer: {
      flex: 1,
    },

  });


  export default Totales;
