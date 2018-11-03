import React from 'react';
import {StyleSheet, Text,Button, View, ScrollView} from 'react-native';
const util = require('util');


class Totales extends React.Component {
  static navigationOptions:{
    header: { visible:false },
    title: 'Welcome'
  };
    render() {
        return (
        <View style={styles.container}>
          <Text style={styles.title}>TOTALES</Text>
          <ScrollView>

          </ScrollView>
          <Button
          title="Agregar"
          onPress={() => this.props.navigation.navigate('Contadores')}
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


  export default Totales;
