import { StyleSheet, Text, View } from "react-native";
import GameList from "../components/GameList";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <GameList />
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