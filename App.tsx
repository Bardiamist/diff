import {
  useState,
  useMemo,
} from 'react';
import {
  View,
  Text,
  Button,
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

  return (
    <View style={{ marginVertical: 80, flex: 1 }}>
      <Animated.SectionList
        stickySectionHeadersEnabled
        sections={[{ data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] }]}
        renderItem={({ item }) => (
          <Text style={{ height: 100, fontSize: 32, backgroundColor: 'gray' }}>{item}</Text>
        )}
        ListHeaderComponent={(
          <Animated.View style={animatedTopStyle}>
            {isNeedToHideTop ? null : <View style={{ height: 300, backgroundColor: 'green' }} />}
          </Animated.View>
        )}
        renderSectionHeader={() => <View style={{ height: 100, backgroundColor: 'red' }} />}
        onScroll={onScroll}
      />
      <Button
        title={`${isNeedToHideTop ? 'Show' : 'Hide'} top after 1 sec`}
        onPress={() => {
          setTimeout(() => {
            setIsNeedToHideTop(!isNeedToHideTop);
          }, 1000);
        }}
      />
    </View>
  );
}

export default App;
