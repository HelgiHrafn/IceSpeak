import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation , Icon, MD3Colors, PaperProvider, MD3LightTheme, MD3DarkTheme, MD2LightTheme, Surface} from 'react-native-paper';
import HomeScreen from './src/views/HomeScreen';

import SettingsView from './src/views/SettingsView';
import UserView from './src/views/UserView';
import SearchView from './src/views/SearchView';
// import Ionicons from '@react-native-vector-icons/ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
 
// write a color scheme using the same options as below but mainly using these colors: #809BCE, #95B8D1, #B8E0D2, #D6EADF, #EAC4D5, #FFFFFF
      primary: '#809BCE',
      onPrimary: '#FFFFFF',
      secondary: '#95B8D1',
      onSecondary: '#FFFFFF',
      tertiary: '#B8E0D2',
      onTertiary: '#FFFFFF',
      secondaryContainer: '#B8E0D2',
      elevation: {
        level0: 'transparent', // various levels of white/gray
        level1: '#FFFFFF',
        level2: '#FFFFFF',
        level3: '#FFFFFF',
        level4: '#FFFFFF',
        level5: '#FFFFFF',
      
      },
      inversePrimary: '#EAC4D5',
      inverseSecondary: '#FFFFFF',
      inverseTertiary: '#FFFFFF',
      inverseAccent: '#FFFFFF',
      inverseSurface: '#FFFFFF',
      inverseOnSurface: '#FFFFFF',
      surface: '#FFFFFF',
      backdrop: '#FFFFFF',
      surfaceVariant: '#D6EADF',
      inverseSurfaceVariant: '#FFFFFF',
      inverseSurface: '#FFFFFF',
      inverseOnSurface: '#FFFFFF',

      background: '#FFFFFF',

// "primary": "rgb(120, 69, 172)",
  //   "onPrimary": "rgb(255, 255, 255)",
  //   "primaryContainer": "rgb(240, 219, 255)",
  //   "onPrimaryContainer": "rgb(44, 0, 81)",
  //   "secondary": "rgb(102, 90, 111)",
  //   "onSecondary": "rgb(255, 255, 255)",
  //   "secondaryContainer": "rgb(237, 221, 246)",
  //   "onSecondaryContainer": "rgb(33, 24, 42)",
  //   "tertiary": "rgb(128, 81, 88)",
  //   "onTertiary": "rgb(255, 255, 255)",
  //   "tertiaryContainer": "rgb(255, 217, 221)",
  //   "onTertiaryContainer": "rgb(50, 16, 23)",
  //   "error": "rgb(186, 26, 26)",
  //   "onError": "rgb(255, 255, 255)",
  //   "errorContainer": "rgb(255, 218, 214)",
  //   "onErrorContainer": "rgb(65, 0, 2)",
  //   "background": "rgb(255, 251, 255)",
  //   "onBackground": "rgb(29, 27, 30)",
  //   "surface": "rgb(255, 251, 255)",
  //   "onSurface": "rgb(29, 27, 30)",
  //   "surfaceVariant": "rgb(233, 223, 235)",
  //   "onSurfaceVariant": "rgb(74, 69, 78)",
  //   "outline": "rgb(124, 117, 126)",
  //   "outlineVariant": "rgb(204, 196, 206)",
  //   "shadow": "rgb(0, 0, 0)",
  //   "scrim": "rgb(0, 0, 0)",
  //   "inverseSurface": "rgb(50, 47, 51)",
  //   "inverseOnSurface": "rgb(245, 239, 244)",
  //   "inversePrimary": "rgb(220, 184, 255)",
  //   "elevation": {
  //     "level0": "transparent",
  //     "level1": "rgb(248, 242, 251)",
  //     "level2": "rgb(244, 236, 248)",
  //     "level3": "rgb(240, 231, 246)",
  //     "level4": "rgb(239, 229, 245)",
  //     "level5": "rgb(236, 226, 243)"
  //   },
  //   "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
  //   "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
  //   "backdrop": "rgba(51, 47, 55, 0.4)"
  // }
      
      
    },
  }
  return (
    <PaperProvider theme={theme}>

    
    <NavigationContainer

    >
       <Tab.Navigator
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              style={{ backgroundColor: theme.colors.secondary }}
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                  navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 24 });
                }

                return null;
              }}
              getLabelText={({ route }) => {
                const { options } = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.title;

                return label;
              }}
              activeColor={theme.colors.inverseAccent} // Set the active tab color
              inactiveColor={'black'} // Set the inactive tab color
              barStyle={{ backgroundColor: theme.colors.accent }} // Set the tab bar background color
            />
          )}
        >
        <Tab.Screen name="Heimasíða" component={HomeScreen} 
        options={{
        
         headerShown: false,
          tabBarLabel: 'Heimasíða',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home"
            color={color}
            size={20} />;
          },
        }}
          />
        <Tab.Screen name="Search" component={SearchView}
        options={{
          headerStyle:{backgroundColor: theme.colors.primary},
          headerTintColor: theme.colors.background,
          tabBarLabel: 'Leita',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="magnify"
            color={color}
            size={20} />;
          },
        }}
        />
        <Tab.Screen name="Notandi" component={UserView} 
        options={{
          headerStyle:{backgroundColor: theme.colors.primary},
          headerTintColor: theme.colors.background,
          tabBarLabel: 'Notandi',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account"
            color={color}
            size={20} />;
          },
        }}
        />
        <Tab.Screen name="Stillingar" component={SettingsView}
        options={{
          headerStyle:{backgroundColor: theme.colors.primary},
          headerTintColor: theme.colors.background,
          tabBarLabel: 'Stillingar',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cog"
            color={color}
            size={20} />;
          },
        }}
        />

     
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
    
  );
}
