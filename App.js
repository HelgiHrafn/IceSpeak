import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation , Icon, MD3Colors, PaperProvider, MD3LightTheme, MD3DarkTheme, MD2LightTheme, Surface} from 'react-native-paper';
import HomeScreen from './src/views/HomeScreen';

import SettingsView from './src/views/SettingsView';
import UserView from './src/views/UserView';
import SearchView from './src/views/SearchView';
import DefinitionGameView from './src/views/DefinitionGameView';
// import Ionicons from '@react-native-vector-icons/ionicons';
const Tab = createBottomTabNavigator();
export default function App() {
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#809BCE',
      onPrimary: '#FFFFFF',
      secondary: '#95B8D1',
      onSecondary: '#FFFFFF',
      tertiary: '#B8E0D2',
      onTertiary: '#FFFFFF',
      secondaryContainer: '#B8E0D2',
      elevation: {
        level0: 'transparent',
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
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
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
              activeColor={theme.colors.inverseAccent}
              inactiveColor={'black'}
              barStyle={{ backgroundColor: theme.colors.accent }}
            />
          )}
        >
          <Tab.Screen
            name="Heimasíða"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Heimasíða',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="home" color={color} size={20} />;
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={DefinitionGameView}
            options={{
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.background,
              tabBarLabel: 'Leita',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="magnify" color={color} size={20} />;
              },
            }}
          />
          <Tab.Screen
            name="Notandi"
            component={UserView}
            options={{
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.background,
              tabBarLabel: 'Notandi',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="account" color={color} size={20} />;
              },
            }}
          />
          <Tab.Screen
            name="Stillingar"
            component={SettingsView}
            options={{
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.background,
              tabBarLabel: 'Stillingar',
              tabBarIcon: ({ color, size }) => {
                return <Icon source="cog" color={color} size={20} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
