import { StyleSheet, Text, View } from "react-native";
import GameList from "../components/GameList";


import { createStackNavigator } from '@react-navigation/stack';
import GameView from "./GameView";
import { MD3Colors, useTheme } from "react-native-paper";
import DefinitionGameView from "./DefinitionGameView";
import DefaultGame from "./DefaultGame";
const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    const theme = useTheme();
    return (

        <Stack.Navigator>
            <Stack.Screen  name="GameList" component={GameList} options={{headerStyle:{backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'Leikir'}}/>
            <Stack.Screen name="1" component={GameView} options={{headerStyle:   {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'Stafarugl'}}/>
            <Stack.Screen name="0" component={DefinitionGameView} options={{headerStyle: {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'Orðarugl'}}/>
            <Stack.Screen name="2" component={DefaultGame} options={{headerStyle: {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'MálfræðiMysa'}}/>
            <Stack.Screen name="3" component={DefaultGame} options={{headerStyle: {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'Lunda-Leikur'}}/>
            <Stack.Screen name="4" component={DefaultGame} options={{headerStyle: {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'SetningaSull'}}/>
            <Stack.Screen name="5" component={DefaultGame} options={{headerStyle: {backgroundColor: theme.colors.primary}, headerTintColor: theme.colors.background, title: 'FuglaFornöfn'}}/>
        </Stack.Navigator>
    
    );
}
