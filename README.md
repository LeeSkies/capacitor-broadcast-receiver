# capacitor-broadcast-receiver

A Capacitor plugin for receiving Android broadcast intents.

## Install

```bash
npm install capacitor-broadcast-receiver
npx cap sync
```

## API

<docgen-index>

* [`startListening(...)`](#startlistening)
* [`stopListening(...)`](#stoplistening)
* [`stopAllListening()`](#stopalllistening)
* [`getActiveListeners()`](#getactivelisteners)
* [`addListener('broadcastReceived', ...)`](#addlistenerbroadcastreceived)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startListening(...)

```typescript
startListening(options: { action: string; }) => Promise<{ message: string; }>
```

Start listening for a specific broadcast action

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ action: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### stopListening(...)

```typescript
stopListening(options: { action: string; }) => Promise<{ message: string; }>
```

Stop listening for a specific broadcast action

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ action: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### stopAllListening()

```typescript
stopAllListening() => Promise<{ message: string; }>
```

Stop listening for all broadcast actions

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### getActiveListeners()

```typescript
getActiveListeners() => Promise<{ actions: string[]; }>
```

Get list of currently active listeners

**Returns:** <code>Promise&lt;{ actions: string[]; }&gt;</code>

--------------------


### addListener('broadcastReceived', ...)

```typescript
addListener(eventName: 'broadcastReceived', listenerFunc: (data: BroadcastData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Add a listener for broadcast events

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'broadcastReceived'</code>                           |
| **`listenerFunc`** | <code>(data: <a href="#broadcastdata">BroadcastData</a>) => void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all listeners for this plugin

**Returns:** <code>Promise&lt;void&gt;</code>

--------------------


### Interfaces


#### BroadcastData

| Prop             | Type                                     |
| ---------------- | ---------------------------------------- |
| **`action`**     | <code>string</code>                     |
| **`extras`**     | <code>{ [key: string]: any; }</code>    |
| **`package`**    | <code>string</code>                     |
| **`scheme`**     | <code>string</code>                     |
| **`dataString`** | <code>string</code>                     |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>

## Usage

```typescript
import { BroadcastReceiver, CommonActions } from 'capacitor-broadcast-receiver';

// Start listening for a broadcast
await BroadcastReceiver.startListening({ 
  action: CommonActions.BATTERY_CHANGED 
});

// Add event listener
BroadcastReceiver.addListener('broadcastReceived', (data) => {
  console.log('Broadcast received:', data);
});

// Stop listening
await BroadcastReceiver.stopListening({ 
  action: CommonActions.BATTERY_CHANGED 
});
```

## Common Actions

The plugin provides a set of common Android broadcast actions:

- `WIFI_STATE_CHANGED`
- `CONNECTIVITY_CHANGE`
- `BATTERY_CHANGED`
- `BOOT_COMPLETED`
- `SCREEN_ON`
- `SCREEN_OFF`
- `AIRPLANE_MODE`
- `SMS_RECEIVED`
- `PHONE_STATE`
- `PACKAGE_ADDED`
- `PACKAGE_REMOVED`
- `USER_PRESENT`
- `TIME_SET`
- `TIMEZONE_CHANGED`
- `LOCALE_CHANGED`

## Android Permissions

Some broadcast actions may require specific permissions in your Android manifest. For example:

```xml
<uses-permission android:name="android.permission.RECEIVE_SMS" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```