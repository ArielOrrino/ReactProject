import React from 'react';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Controls from './components/Controls';
import CounterContainer from './components/CounterContainer';
import store from './state/store';
import MuestroTot from './components/muestro';

class App extends React.Component {
//  componentDidUpdate() { store.getState().counter.total }

  render() {
    return (

      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}> 
            Contadores de cosas que rompió patu!
          </Text>

          <Controls />

          <ScrollView style={styles.scrollViewContainer}>
            <CounterContainer />           
          </ScrollView>
          <MuestroTot />
        </View>
      </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },

  scrollViewContainer: {
    flex: 1,
  },

});

export default App;
