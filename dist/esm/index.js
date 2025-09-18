import { registerPlugin } from '@capacitor/core';
const BroadcastReceiver = registerPlugin('BroadcastReceiver', {
    web: () => import('./web').then((m) => new m.BroadcastReceiverWeb()),
});
export * from './definitions';
export { BroadcastReceiver };
