import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
  createStaticNavigation,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const navigationRef = createNavigationContainerRef();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Navigate to Books'
        onPress={() => {
          navigationRef.current?.navigate('BooksTab', {
            screen: 'Books',
          });
        }}
      />
    </View>
  );
}

function BooksScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#005000' }}
    >
      <Text>Books Screen</Text>
      <Button
        title='Navigate to Book'
        onPress={() => {
          navigation.navigate('Book');
        }}
      />
    </View>
  );
}

function BookScreen() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}
    >
      <Text style={{ color: 'white' }}>Book Screen</Text>
    </View>
  );
}

const HomeStackNavigator = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const BooksStackNavigator = createNativeStackNavigator({
  screens: {
    Books: BooksScreen,
    Book: BookScreen,
  },
});

const MyTabs = createBottomTabNavigator({
  screens: {
    HomeTab: HomeStackNavigator,
    BooksTab: BooksStackNavigator,
  },
  screenOptions: {
    headerShown: false,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    MyTabs,
  },
    screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation ref={navigationRef} />;
}
