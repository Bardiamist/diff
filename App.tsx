/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, TextInput } from 'react-native';

function App() {
  const [text, setText] = useState('');


  return (
    <View style={{ flex: 1, paddingTop: 100 }}>
      <TextInput
        multiline
        autoCorrect
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </View>
  );
}

export default App;
