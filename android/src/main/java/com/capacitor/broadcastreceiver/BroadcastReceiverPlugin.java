package com.capacitor.broadcastreceiver;

import android.content.IntentFilter;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import java.util.HashMap;
import java.util.Map;

@CapacitorPlugin(name = "BroadcastReceiver")
public class BroadcastReceiverPlugin extends Plugin {

    private Map<String, GenericBroadcastReceiver> receivers = new HashMap<>();

    @PluginMethod
    public void startListening(PluginCall call) {
        String action = call.getString("action");
        
        if (action == null || action.isEmpty()) {
            call.reject("Action is required");
            return;
        }

        try {
            if (receivers.containsKey(action)) {
                JSObject ret = new JSObject();
                ret.put("message", "Already listening to " + action);
                call.resolve(ret);
                return;
            }

            GenericBroadcastReceiver receiver = new GenericBroadcastReceiver(this, action);
            IntentFilter filter = new IntentFilter(action);
            
            getContext().registerReceiver(receiver, filter);
            receivers.put(action, receiver);
            
            JSObject ret = new JSObject();
            ret.put("message", "Started listening to " + action);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to register receiver for " + action, e);
        }
    }

    @PluginMethod
    public void stopListening(PluginCall call) {
        String action = call.getString("action");
        
        if (action == null || action.isEmpty()) {
            call.reject("Action is required");
            return;
        }

        try {
            GenericBroadcastReceiver receiver = receivers.get(action);
            if (receiver != null) {
                getContext().unregisterReceiver(receiver);
                receivers.remove(action);
                
                JSObject ret = new JSObject();
                ret.put("message", "Stopped listening to " + action);
                call.resolve(ret);
            } else {
                JSObject ret = new JSObject();
                ret.put("message", "Not listening to " + action);
                call.resolve(ret);
            }
        } catch (Exception e) {
            call.reject("Failed to unregister receiver for " + action, e);
        }
    }

    @PluginMethod
    public void stopAllListening(PluginCall call) {
        try {
            for (GenericBroadcastReceiver receiver : receivers.values()) {
                try {
                    getContext().unregisterReceiver(receiver);
                } catch (IllegalArgumentException e) {
                    // Receiver was already unregistered
                }
            }
            receivers.clear();
            
            JSObject ret = new JSObject();
            ret.put("message", "Stopped all listeners");
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to stop all listeners", e);
        }
    }

    @PluginMethod
    public void getActiveListeners(PluginCall call) {
        JSArray activeActions = new JSArray();
        for (String action : receivers.keySet()) {
            activeActions.put(action);
        }
        
        JSObject ret = new JSObject();
        ret.put("actions", activeActions);
        call.resolve(ret);
    }

    public void sendBroadcastEvent(String eventName, JSObject data) {
        notifyListeners(eventName, data);
    }

    @Override
    protected void handleOnDestroy() {
        for (GenericBroadcastReceiver receiver : receivers.values()) {
            try {
                getContext().unregisterReceiver(receiver);
            } catch (IllegalArgumentException e) {
                // Receiver was already unregistered
            }
        }
        receivers.clear();
        super.handleOnDestroy();
    }
}