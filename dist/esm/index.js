import { registerPlugin } from '@capacitor/core';
const BroadcastReceiver = registerPlugin('BroadcastReceiver');
export * from './definitions';
export { BroadcastReceiver };
