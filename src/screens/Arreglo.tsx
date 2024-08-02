import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
   
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  
    
    const [pares, setPares] = useState([]);
    const [impares, setImpares] = useState([]);
  
   
    const clasificarNumeros = () => {
      const nuevosPares = numeros.filter(num => num % 2 === 0);
      const nuevosImpares = numeros.filter(num => num % 2 !== 0);
      setPares(nuevosPares);
      setImpares(nuevosImpares);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BIENVENIDO</Text>
        <Text style={styles.vector}>
          Vector: {numeros.join(', ')}
        </Text>
        <Button title="CLASIFICAR" onPress={clasificarNumeros} />
        {pares.length > 0 && (
          <>
            <Text style={styles.result}>Pares: {pares.join(', ')}</Text>
            <Text style={styles.result}>Impares: {impares.join(', ')}</Text>
          </>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    welcome: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    vector: {
      fontSize: 16,
      marginBottom: 16,
    },
    result: {
      fontSize: 18,
      marginVertical: 8,
    },
  });
