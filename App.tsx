/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, useMemo, useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isA, setIsA] = useState(false);
  const [isTransform, setIsTransfrom] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: 10,
    }],
  }));

  const memoizedRowStyles = useMemo(() => {
    const rowStyles = [styles.row];

    if (isTransform) {
      rowStyles.push(animatedStyle);
    }

    return rowStyles;
  }, [isTransform, animatedStyle])

  let sum = 0;

  for (let i = 0; i < 100000; i++) {
    sum += i;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsA(!isA);
    }, 100);
  }, [isA]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {Array.from({ length: 200 }, (_, i) => i).map((value) => (
        <Animated.View key={`${value}${isTransform}`} style={memoizedRowStyles} />
      ))}
      <Button
        title={isTransform ? "Remove transform stye" : "Add transform style"}
        onPress={() => {
          setIsTransfrom(!isTransform);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: 4,
    backgroundColor: 'gray',
  },
});

export default App;
