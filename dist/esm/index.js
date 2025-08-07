import { registerPlugin } from '@capacitor/core';
const BroadcastReceiver = registerPlugin('BroadcastReceiver', {
    web: () => console.error('BroadcastReceiver is not available on web'),
});
export * from './definitions';
export { BroadcastReceiver };
