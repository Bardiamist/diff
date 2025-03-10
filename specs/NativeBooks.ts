import type {
  TurboModule,
} from 'react-native';

import {
  TurboModuleRegistry,
} from 'react-native';

export interface Spec extends TurboModule {
  removeBook: () => boolean;
}

export const NativeBooks = TurboModuleRegistry.getEnforcing<Spec>(
  'NativeBooks',
);
