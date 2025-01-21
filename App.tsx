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
      initialNumToRender={1000}
      removeClippedSubviews={false}
      sections={[{ title: 'Section 1', data }]}
      renderItem={({ item }) => (
        <Text>{item}</Text>
      )}
    />
  );
};

function ProfileScreen() {
  const sectionList = useHighLoad(1000);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {sectionList}
    </View>
  );
}

function Tab1() {
  const navigation = useNavigation();

  const sectionList = useHighLoad(3000);

  return (
    <View style={{ marginTop: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab1 Screen</Text>
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
      borderColor: 'red',
    },
    sceneStyle: {
      backgroundColor: 'red',
    },
  },
  screens: {
    Tab1,
    Tab2,
  },
});

const MyStack = createStackNavigator({
  screenOptions: {
    headerStyle: {
      backgroundColor: 'red',
    },
    cardStyle: {
      backgroundColor: 'red',
    },
  },
  screens: {
    MainTabs: {
      screen: MainTabsNavigator,
      options: {
        headerShown: false,
      },
    },
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}
