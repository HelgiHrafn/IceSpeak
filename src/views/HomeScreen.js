import { StyleSheet, Text, View } from "react-native";
import GameList from "../components/GameList";


import { createStackNavigator } from '@react-navigation/stack';
import GameView from "./GameView";
import { MD3Colors, useTheme } from "react-native-paper";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    const theme = useTheme();
    return (

        <Stack.Navigator>
            <Stack.Screen  name="GameList" component={GameList} options={{headerStyle:{backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'Leikir'}}/>
            <Stack.Screen name="GameView" component={GameView} options={{headerStyle:{backgroundColor: theme.colors.primary}}}/>
        </Stack.Navigator>
    
    );
}
