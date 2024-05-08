/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback, useLayoutEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
// import Animated from 'react-native-reanimated';
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onPress = useCallback(() => {
    setIsEnabled(!isEnabled);
  }, [isEnabled]);

  useLayoutEffect(() => {
    if (isEnabled) {
      setTimeout(() => {
        setIsVisible(!isVisible);
      }, 1);
    }
  }, [isEnabled, isVisible]);

  const rows = [];

  if (isVisible) {
    for (let index = 0; index < 1000; index += 1) {
      const pan = Gesture.Pan()
        .activeOffsetX(10)
        .onBegin(() => {})
        .onUpdate(() => {})
        .onFinalize(() => {});

      rows.push(
        <GestureDetector key={index} gesture={pan}>
          <View />
        </GestureDetector>,
      );
    }
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.space} />
      <Button title={isEnabled ? 'Stop' : 'Start'} onPress={onPress} />
      {rows}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 200,
  },
});

export default App;
