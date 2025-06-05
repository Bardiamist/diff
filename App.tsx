import 'react-native-gesture-handler';
import { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
  const [value, setValue] = useState('');

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'ligth-gray', justifyContent: 'center' }}>
      <TextInput
        value={value}
        style={{ height: 44, backgroundColor: 'red' }}
        onChangeText={setValue}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 44, backgroundColor: 'red' }}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

const MyStack = createStackNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation/>;
}
