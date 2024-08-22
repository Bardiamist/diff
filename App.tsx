import React from 'react';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  NativeModules,
} from 'react-native';

const {
  Locales,
} = NativeModules;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Change language to zh-Hans"
        onPress={() => {
          Locales.setLanguage();
        }}
      />
    </SafeAreaView>
  );
}

export default App;
