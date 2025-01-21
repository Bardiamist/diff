// In App.js in a new project

import * as React from 'react';
import { useState, useLayoutEffect } from 'react';
import { View, Text, Button, SectionList } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const useHighLoad = (difficulty: number) => {
  const [count, setCount] = useState(difficulty);

  useLayoutEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1);
  }, [count]);

  const data = [];

  for (let index = 0; index <= difficulty; index += 1) {
    data.push(index);
  }

  return (
    <SectionList
      initialNumToRender={difficulty}
      removeClippedSubviews={false}
      sections={[{ title: 'Section 1', data }]}
      renderItem={({ item }) => (
        <Text>{item}</Text>
      )}
    />
  );
};

function ProfileScreen() {
  const sectionList = useHighLoad(700);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {sectionList}
    </View>
  );
}

function Tab1Screen1() {
  const navigation = useNavigation();

  const sectionList = useHighLoad(1000);

  return (
    <View style={{ marginTop: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab1 Screen 1</Text>
      <Button
        title="Go to Tab 1 screen 2"
        onPress={() => {
          navigation.navigate('Tab1Screen2');
        }}
      />
      {sectionList}
    </View>
  );
}

function Tab1Screen2() {
  const navigation = useNavigation();

  const sectionList = useHighLoad(3000);

  return (
    <View style={{ marginTop: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab1 Screen 2</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      {sectionList}
    </View>
  );
}

const Tab1StackNavigator = createStackNavigator({
  screenOptions: {
    headerStyle: {
      backgroundColor: 'red',
    },
    cardStyle: {
      backgroundColor: 'red',
    },
  },
  screens: {
    Tab1Screen1: {
      screen: Tab1Screen1,
    },
    Tab1Screen2: {
      screen: Tab1Screen2,
    },
  },
});

function Tab2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab2 Screen</Text>
    </View>
  );
}

const MainTabsNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'red',
    },
  },
  screens: {
    Tab1StackNavigator,
    Tab2,
  },
});

const MyStack = createStackNavigator({
  screens: {
    MainTabs: {
      screen: MainTabsNavigator,
      options: {
        headerShown: false,
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        headerStyle: {
          backgroundColor: 'red',
        },
        cardStyle: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}
