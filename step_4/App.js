import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Totales from '../screens/Totales';
import Contadores from '../screens/Contadores';


const Navigation = createStackNavigator({
  Totales:{screen: Totales},
  Contadores:{screen: Contadores},
});

export default Navigation;
