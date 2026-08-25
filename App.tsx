import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Repro for expo-secure-store + androidx.core 1.18.0
//
// androidx.core 1.18.0 stubbed out FingerprintManagerCompat (isHardwareDetected()
// and hasEnrolledFingerprints() always return false). androidx.biometric 1.1.0,
// pinned by expo-secure-store, falls back to that class on API <= 29.
//
// Installing expo-camera is enough to pull androidx.core to 1.18.0, because it
// declares androidx.core:core-ktx:1.18.0 while expo-modules-core declares 1.17.0,
// and Gradle resolves the highest request for the whole app.
//
// Expected on an Android 10 emulator with a fingerprint enrolled: true
// Actual with androidx.core 1.18.0: false

const canUseBiometrics = SecureStore.canUseBiometricAuthentication();

console.log('canUseBiometricAuthentication():', canUseBiometrics);

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>SecureStore.canUseBiometricAuthentication()</Text>
      <Text style={[styles.value, canUseBiometrics ? styles.ok : styles.bad]}>
        {String(canUseBiometrics)}
      </Text>
      <Text style={styles.meta}>
        Android API {Platform.Version} — expected true with a fingerprint enrolled
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
  value: {
    fontSize: 56,
    fontWeight: '700',
    marginVertical: 16,
  },
  ok: {
    color: '#1a7f37',
  },
  bad: {
    color: '#cf222e',
  },
  meta: {
    fontSize: 13,
    opacity: 0.6,
    textAlign: 'center',
  },
});

export default App;
