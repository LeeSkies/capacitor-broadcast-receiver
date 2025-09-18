import { WebPlugin } from '@capacitor/core';
import type { BroadcastReceiverPlugin, PluginListenerHandle } from './definitions';
export declare class BroadcastReceiverWeb extends WebPlugin implements BroadcastReceiverPlugin {
    startListening(_options: {
        action: string;
    }): Promise<{
        message: string;
    }>;
    stopListening(_options: {
        action: string;
    }): Promise<{
        message: string;
    }>;
    stopAllListening(): Promise<{
        message: string;
    }>;
    getActiveListeners(): Promise<{
        actions: string[];
    }>;
    addListener(_eventName: 'broadcastReceived', _listenerFunc: (data: any) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
}
