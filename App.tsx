/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useCallback } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  useFocusEffect,
} from '@react-navigation/native';
import {
  enableFreeze,
} from 'react-native-screens';

enableFreeze(true);

const Tab = createBottomTabNavigator();

const LightScreen = () => {};

const HeavyScreen = () => {
  useFocusEffect(useCallback(() => {
    let i = 0;

    while (i < 100000000) {
      i++;
    }
  }, []));
};

const TabNavigatorScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Light screen 1"
        component={LightScreen}
      />
      <Tab.Screen
        name="Light screen 2"
        component={LightScreen}
      />
      <Tab.Screen
        name="Light screen 3"
        component={LightScreen}
      />
      <Tab.Screen
        name="Heavy screen"
        component={HeavyScreen}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <TabNavigatorScreen />
    </NavigationContainer>
  );
}

export default App;
