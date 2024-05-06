import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameView from './src/views/GameView';
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (

    <View style={styles.container}>
      <GameView >

      </GameView> 
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

