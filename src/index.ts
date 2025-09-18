import { registerPlugin } from '@capacitor/core';

import type { BroadcastReceiverPlugin } from './definitions';

const BroadcastReceiver = registerPlugin<BroadcastReceiverPlugin>(
  'BroadcastReceiver',
  {
    web: () => import('./web').then((m) => new m.BroadcastReceiverWeb()),
  }
);

export * from './definitions';
export { BroadcastReceiver };
