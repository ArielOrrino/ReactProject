import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Muestro extends React.Component {
  
  render() {
    const {counter} = this.props;
    return (
      <View style={styles.container}>        
          <Text style={styles.text}> Total: {counter.total} </Text>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4A6075',
    height: 50
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});
const mapStateToProps = (state) => {
  return {counter: state.counter};
 };
export default connect(mapStateToProps)(Muestro);
