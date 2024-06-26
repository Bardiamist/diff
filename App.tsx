import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export const MyPager = () => {
  return (
    <PagerView style={styles.flex1} initialPage={0}>
      <View key="1">
        <View style={styles.flex1}>
          <Text>First page</Text>
        </View>
      </View>
      <View key="2">
        <View style={styles.flex1}>
          <Text>Second page</Text>
        </View>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
