'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CommonActions = {
    WIFI_STATE_CHANGED: 'android.net.wifi.WIFI_STATE_CHANGED',
    CONNECTIVITY_CHANGE: 'android.net.conn.CONNECTIVITY_CHANGE',
    BATTERY_CHANGED: 'android.intent.action.BATTERY_CHANGED',
    BOOT_COMPLETED: 'android.intent.action.BOOT_COMPLETED',
    SCREEN_ON: 'android.intent.action.SCREEN_ON',
    SCREEN_OFF: 'android.intent.action.SCREEN_OFF',
    AIRPLANE_MODE: 'android.intent.action.AIRPLANE_MODE',
    SMS_RECEIVED: 'android.provider.Telephony.SMS_RECEIVED',
    PHONE_STATE: 'android.intent.action.PHONE_STATE',
    PACKAGE_ADDED: 'android.intent.action.PACKAGE_ADDED',
    PACKAGE_REMOVED: 'android.intent.action.PACKAGE_REMOVED',
    USER_PRESENT: 'android.intent.action.USER_PRESENT',
    TIME_SET: 'android.intent.action.TIME_SET',
    TIMEZONE_CHANGED: 'android.intent.action.TIMEZONE_CHANGED',
    LOCALE_CHANGED: 'android.intent.action.LOCALE_CHANGED',
};

const BroadcastReceiver = core.registerPlugin('BroadcastReceiver', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.BroadcastReceiverWeb()),
});

class BroadcastReceiverWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BroadcastReceiverWeb: BroadcastReceiverWeb
});

exports.BroadcastReceiver = BroadcastReceiver;
exports.CommonActions = CommonActions;
//# sourceMappingURL=plugin.cjs.js.map
