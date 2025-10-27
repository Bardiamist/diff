/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, useColorScheme, View, Text, Pressable } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [isGreen, setIsGreen] = useState(false);

  let rippleColor;
  let pressableStyle;

  if (isGreen) {
    rippleColor = '#00AA00';
    pressableStyle = {
      height: 44,
      backgroundColor: '#00AA00'
    };
  } else {
    rippleColor = '#AA0000';
    pressableStyle = {
      height: 44,
      backgroundColor: '#AA0000'
    };
  }

  return (
    <View style={{
      flex: 1,
      paddingTop: 100,
    }}>
        <Text>Button background color must be: {isGreen ? 'Green' : 'Red'}</Text>
        <Pressable
          style={pressableStyle}
          android_ripple={{
            color: rippleColor,
          }}
          onPress={() => {
            setIsGreen(!isGreen);
          }}
        />
    </View>
  );
}

export default App;
