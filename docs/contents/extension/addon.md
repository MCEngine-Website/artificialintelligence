# AI AddOn Usage Guide

**Path:** `com.example.MyAIAddOn.java`

This document explains how to implement the `IMCEngineArtificialIntelligenceAddOn` interface to create a custom AI-based AddOn for the MCEngine.

## Interface

```java
package com.example;

import io.github.mcengine.api.artificialintelligence.extension.addon.IMCEngineArtificialIntelligenceAddOn;
import io.github.mcengine.api.core.extension.logger.MCEngineExtensionLogger;
import org.bukkit.plugin.Plugin;

public class MyAIAddOn implements IMCEngineArtificialIntelligenceAddOn {

    private String id;

    @Override
    public void onLoad(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "AddOn", id);
        logger.info("AI AddOn loaded with ID: " + id);
    }

    @Override
    public void onDisload(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "AddOn", id);
        logger.info("AI AddOn unloaded with ID: " + id);
    }

    @Override
    public void setId(String id) {
        MCEngineApi.setId("example");
    }
}
```

## Description

This interface allows dynamic integration of AI modules into the MCEngine plugin ecosystem. It includes three primary methods:

- `onLoad(Plugin plugin)`: Called when the AddOn is loaded. Use it to initialize resources or systems.
- `onDisload(Plugin plugin)`: Called when the AddOn is disabled or removed. Use it for cleanup.
- `setId(String id)`: Receives a unique identifier for the AddOn instance.

## Notes

- Always ensure proper resource cleanup in `onDisload`.
- You can register custom AI tasks, listeners, or services during `onLoad`.
