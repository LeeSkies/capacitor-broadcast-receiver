import { registerPlugin } from '@capacitor/core';

import type { BroadcastReceiverPlugin } from './definitions';

const BroadcastReceiver = registerPlugin<BroadcastReceiverPlugin>(
  'BroadcastReceiver'
);

export * from './definitions';
export { BroadcastReceiver };
