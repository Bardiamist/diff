import {
  useState,
  useMemo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';


function App(): React.JSX.Element {
  const [isNeedToHideTop, setIsNeedToHideTop] = useState(false);

  const scrollAnimatedValue = useMemo(() => new Animated.Value(0), []);

  const onScroll = useMemo(() => Animated.event(
    [{
      nativeEvent: {
        contentOffset: { y: scrollAnimatedValue },
      },
    }],
    { useNativeDriver: true },
  ), [scrollAnimatedValue]);

  const animatedTopStyle = useMemo(() => ({
    transform: [
      {
        translateY: (scrollAnimatedValue.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 0, 1],
        }) as any),
      },
    ],
  }), [scrollAnimatedValue]);

  useEffect(() => {
    setTimeout(() => {
      setIsNeedToHideTop(!isNeedToHideTop);
    }, 3000);
  }, [isNeedToHideTop]);

  return (
    <Animated.SectionList
      stickySectionHeadersEnabled
      sections={[{ data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
      renderItem={({ item }) => (
        <Text style={{ height: 100, fontSize: 32 }}>{item}</Text>
      )}
      ListHeaderComponent={(
        <Animated.View style={animatedTopStyle}>
          {isNeedToHideTop ? null : <View style={{ height: 100, backgroundColor: 'green' }} />}
        </Animated.View>
      )}
      renderSectionHeader={() => <View style={{ height: 100, backgroundColor: 'red' }} />}
      onScroll={onScroll}
    />
  );
}

export default App;
