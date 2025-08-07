package com.capacitor.broadcastreceiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import com.getcapacitor.JSObject;

public class GenericBroadcastReceiver extends BroadcastReceiver {
    
    private static final String TAG = "GenericBroadcastReceiver";
    private final BroadcastReceiverPlugin plugin;
    private final String targetAction;
    
    public GenericBroadcastReceiver(BroadcastReceiverPlugin plugin, String targetAction) {
        this.plugin = plugin;
        this.targetAction = targetAction;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent != null && targetAction.equals(intent.getAction())) {
            Log.d(TAG, "Received broadcast for action: " + targetAction);
            
            JSObject data = new JSObject();
            data.put("action", targetAction);
            
            // Extract all extras from the intent
            Bundle extras = intent.getExtras();
            if (extras != null) {
                JSObject extrasObj = bundleToJSObject(extras);
                data.put("extras", extrasObj);
            } else {
                data.put("extras", new JSObject());
            }
            
            // Add intent metadata
            data.put("package", intent.getPackage());
            data.put("scheme", intent.getScheme());
            data.put("dataString", intent.getDataString());
            
            plugin.sendBroadcastEvent("broadcastReceived", data);
        }
    }

    private JSObject bundleToJSObject(Bundle bundle) {
        JSObject obj = new JSObject();
        
        for (String key : bundle.keySet()) {
            Object value = bundle.get(key);
            if (value == null) {
                obj.put(key, (String) null);
            } else if (value instanceof String) {
                obj.put(key, (String) value);
            } else if (value instanceof Integer) {
                obj.put(key, (Integer) value);
            } else if (value instanceof Double) {
                obj.put(key, (Double) value);
            } else if (value instanceof Boolean) {
                obj.put(key, (Boolean) value);
            } else if (value instanceof Float) {
                obj.put(key, ((Float) value).doubleValue());
            } else if (value instanceof Long) {
                obj.put(key, ((Long) value).doubleValue());
            } else if (value instanceof Bundle) {
                obj.put(key, bundleToJSObject((Bundle) value));
            } else {
                // For unsupported types, convert to string
                obj.put(key, value.toString());
                Log.w(TAG, "Unsupported type for key '" + key + "': " + value.getClass().getSimpleName());
            }
        }
        
        return obj;
    }
}