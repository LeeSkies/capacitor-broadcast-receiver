import { WebPlugin } from '@capacitor/core';
export class BroadcastReceiverWeb extends WebPlugin {
    async startListening(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async stopListening(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async stopAllListening() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getActiveListeners() {
        throw this.unimplemented('Not implemented on web.');
    }
    addListener(_eventName, _listenerFunc) {
        const handle = {
            remove: async () => {
                throw this.unimplemented('Not implemented on web.');
            }
        };
        const promise = Promise.resolve(handle);
        return Object.assign(promise, handle);
    }
}
