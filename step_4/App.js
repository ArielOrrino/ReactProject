import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import Controls from './components/Controls';
import CounterContainer from './components/CounterContainer';
import store from './state/store';
import {  createStackNavigator, StackActions, NavigationActions} from 'react-navigation';


class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text>Totales</Text>
          <Button style={{}}
            title="Agregar"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }))
            }}
          />
        </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>*/
      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Contadores de cosas que rompió patu!
          </Text>
          <Controls />
          <ScrollView style={styles.scrollViewContainer}>
            <CounterContainer />
          </ScrollView>
        </View>
      </ReduxProvider>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});










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



//export default App;
