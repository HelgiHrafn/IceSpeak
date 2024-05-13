import { StyleSheet, Text, View } from "react-native";
import GameList from "../components/GameList";

import { createStackNavigator } from '@react-navigation/stack';
import GameView from "./GameView";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    return (
      
            <Stack.Navigator>
                <Stack.Screen name="GameList" component={GameList} />
                <Stack.Screen name="GameView" component={GameView} />
            </Stack.Navigator>
            
    
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