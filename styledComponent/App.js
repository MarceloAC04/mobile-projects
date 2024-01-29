import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';

export default function App() {
  const[count, setCount] = useState(0)

  //função de incremento
  const incremento = () => {
    setCount(count + 1)
  }

  const descremento = () => {
    setCount(count - 1);
  }
  //effect 

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])
  return (
    <Container>

      <Text style={styles.title}>Contador: {count}</Text>

      <TouchableOpacity style={styles.btn} onPress={incremento}>
        <Text style={styles.text}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={descremento}>
        <Text style={styles.text}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar/>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});
