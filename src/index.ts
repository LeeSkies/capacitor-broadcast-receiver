import { registerPlugin } from '@capacitor/core';

import type { BroadcastReceiverPlugin } from './definitions';

const BroadcastReceiver = registerPlugin<BroadcastReceiverPlugin>(
  'BroadcastReceiver',
  {
    web: () => console.error('BroadcastReceiver is not available on web'),
  },
);

export * from './definitions';
export { BroadcastReceiver };