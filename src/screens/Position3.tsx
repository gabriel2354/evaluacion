import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native';

const position3 = () => {
  return (
  <View style={styles.container}>
    <View style={styles.boxpurple}></View>
    <View style={styles.boxSkyblue}></View>

  </View>
  )
}

export default position3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margintop: 50,
        backgroundColor: '#44becf'

    },
    boxpurple: {
      width: 100
      height: 100,
      backgroudColor: 'purple'
      borderWidth: 10,
      borderColor: 'white'
      top 45
    }

      boxOrange: {
        width : 100,
        height: 100,
        backgroundColor: 'orange'
        borderWith:10,
        top: 75
    }
    boxSkyblue {
        width: 100
        height: 100,
        backgroudColor: 'purple'
        borderWidth: 10,
        borderColor: 'white'
        top: 20

});