export interface BroadcastReceiverPlugin {
    /**
     * Start listening for a specific broadcast action
     *
     * @since 1.0.0
     */
    startListening(options: {
        action: string;
    }): Promise<{
        message: string;
    }>;
    /**
     * Stop listening for a specific broadcast action
     *
     * @since 1.0.0
     */
    stopListening(options: {
        action: string;
    }): Promise<{
        message: string;
    }>;
    /**
     * Stop listening for all broadcast actions
     *
     * @since 1.0.0
     */
    stopAllListening(): Promise<{
        message: string;
    }>;
    /**
     * Get list of currently active listeners
     *
     * @since 1.0.0
     */
    getActiveListeners(): Promise<{
        actions: string[];
    }>;
    /**
     * Add a listener for broadcast events
     *
     * @since 1.0.0
     */
    addListener(eventName: 'broadcastReceived', listenerFunc: (data: BroadcastData) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    /**
     * Remove all listeners for this plugin
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}
export interface BroadcastData {
    action: string;
    extras: {
        [key: string]: any;
    };
    package?: string;
    scheme?: string;
    dataString?: string;
}
export interface PluginListenerHandle {
    remove(): Promise<void>;
}
export declare const CommonActions: {
    readonly WIFI_STATE_CHANGED: "android.net.wifi.WIFI_STATE_CHANGED";
    readonly CONNECTIVITY_CHANGE: "android.net.conn.CONNECTIVITY_CHANGE";
    readonly BATTERY_CHANGED: "android.intent.action.BATTERY_CHANGED";
    readonly BOOT_COMPLETED: "android.intent.action.BOOT_COMPLETED";
    readonly SCREEN_ON: "android.intent.action.SCREEN_ON";
    readonly SCREEN_OFF: "android.intent.action.SCREEN_OFF";
    readonly AIRPLANE_MODE: "android.intent.action.AIRPLANE_MODE";
    readonly SMS_RECEIVED: "android.provider.Telephony.SMS_RECEIVED";
    readonly PHONE_STATE: "android.intent.action.PHONE_STATE";
    readonly PACKAGE_ADDED: "android.intent.action.PACKAGE_ADDED";
    readonly PACKAGE_REMOVED: "android.intent.action.PACKAGE_REMOVED";
    readonly USER_PRESENT: "android.intent.action.USER_PRESENT";
    readonly TIME_SET: "android.intent.action.TIME_SET";
    readonly TIMEZONE_CHANGED: "android.intent.action.TIMEZONE_CHANGED";
    readonly LOCALE_CHANGED: "android.intent.action.LOCALE_CHANGED";
};
export declare type CommonAction = (typeof CommonActions)[keyof typeof CommonActions];
