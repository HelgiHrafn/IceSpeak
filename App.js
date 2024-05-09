import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation , Icon, MD3Colors} from 'react-native-paper';
import HomeScreen from './src/views/HomeScreen';

import SettingsView from './src/views/SettingsView';
import UserView from './src/views/UserView';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import GameView from './src/views/GameView';
// import Ionicons from '@react-native-vector-icons/ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //  screenOptions={{
        //   headerShown: false,
        // }}
        // tabBar={({ navigation, state, descriptors, insets }) => (
        //   <BottomNavigation.Bar
        //     navigationState={state}
        //    safeAreaInsets={insets}
        //     onTabPress={({ route, preventDefault }) => {
        //       const event = navigation.emit({
        //         type: 'tabPress',
        //         target: route.key,
        //         canPreventDefault: true,
        //       });
  
        //       if (event.defaultPrevented) {
        //         preventDefault();
        //       } else {
        //        navigation.dispatch({
        //           ...CommonActions.navigate(route.name, route.params),
        //           target: state.key,
        //         });
        //       }
        //     }}
        //     renderIcon={({ route, focused, color }) => {
        //       const { options } = descriptors[route.key];
        //       if (options.tabBarIcon) {
        //         return options.tabBarIcon({ focused, color, size: 24 });
        //       }
  
        //       return null;
        //     }}
        //     getLabelText={({ route }) => {
        //       const { options } = descriptors[route.key];
        //       const label =
        //         options.tabBarLabel !== undefined
        //           ? options.tabBarLabel
        //           : options.title !== undefined
        //           ? options.title
        //           : route.title;
  
        //       return label;
        //     }}
        //   />
        // )}
      >
        <Tab.Screen name="Heimasíða" component={HomeScreen} 
        options={{
          tabBarLabel: 'Heimasíða',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home"
            color={MD3Colors.blue500}
            size={20} />;
          },
        }}
          />
        <Tab.Screen name="Leikir" component={GameView}
        options={{
          tabBarLabel: 'Leikir',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="gamepad"
            color={MD3Colors.blue500}
            size={20} />;
          },
        }}
        />
        <Tab.Screen name="Notandi" component={UserView} 
        options={{
          tabBarLabel: 'Notandi',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account"
            color={MD3Colors.blue500}
            size={20} />;
          },
        }}
        />
        <Tab.Screen name="Stillingar" component={SettingsView}
        options={{
          tabBarLabel: 'Stillingar',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cog"
            color={MD3Colors.blue500}
            size={20} />;
          },
        }}
        />

     
      </Tab.Navigator>
    </NavigationContainer>
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

