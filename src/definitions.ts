export interface BroadcastReceiverPlugin {
  /**
   * Start listening for a specific broadcast action
   * 
   * @since 1.0.0
   */
  startListening(options: { action: string }): Promise<{ message: string }>;

  /**
   * Stop listening for a specific broadcast action
   * 
   * @since 1.0.0
   */
  stopListening(options: { action: string }): Promise<{ message: string }>;

  /**
   * Stop listening for all broadcast actions
   * 
   * @since 1.0.0
   */
  stopAllListening(): Promise<{ message: string }>;

  /**
   * Get list of currently active listeners
   * 
   * @since 1.0.0
   */
  getActiveListeners(): Promise<{ actions: string[] }>;

  /**
   * Add a listener for broadcast events
   * 
   * @since 1.0.0
   */
  addListener(
    eventName: 'broadcastReceived',
    listenerFunc: (data: BroadcastData) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all listeners for this plugin
   * 
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}

export interface BroadcastData {
  action: string;
  extras: { [key: string]: any };
  package?: string;
  scheme?: string;
  dataString?: string;
}

export interface PluginListenerHandle {
  remove(): Promise<void>;
}

export const CommonActions = {
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
} as const;

export type CommonAction = (typeof CommonActions)[keyof typeof CommonActions];