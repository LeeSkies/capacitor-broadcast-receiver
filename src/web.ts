import { WebPlugin } from '@capacitor/core';

import type { BroadcastReceiverPlugin, PluginListenerHandle } from './definitions';

export class BroadcastReceiverWeb extends WebPlugin implements BroadcastReceiverPlugin {
  async startListening(_options: { action: string }): Promise<{ message: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  async stopListening(_options: { action: string }): Promise<{ message: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  async stopAllListening(): Promise<{ message: string }> {
    throw this.unimplemented('Not implemented on web.');
  }

  async getActiveListeners(): Promise<{ actions: string[] }> {
    throw this.unimplemented('Not implemented on web.');
  }

  addListener(
    _eventName: 'broadcastReceived',
    _listenerFunc: (data: any) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    const handle: PluginListenerHandle = {
      remove: async () => {
        throw this.unimplemented('Not implemented on web.');
      }
    };

    const promise = Promise.resolve(handle);
    return Object.assign(promise, handle);
  }
}