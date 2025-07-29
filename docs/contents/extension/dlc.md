# AI DLC Module Usage Guide

**Path:** `com.example.MyAIDLC.java`

This document explains how to implement the `IMCEngineArtificialIntelligenceDLC` interface to create a custom AI-based DLC module for the MCEngine.

## Interface

```java
package com.example;

import io.github.mcengine.api.artificialintelligence.extension.dlc.IMCEngineArtificialIntelligenceDLC;
import io.github.mcengine.api.core.extension.logger.MCEngineExtensionLogger;
import org.bukkit.plugin.Plugin;

public class MyAIDLC implements IMCEngineArtificialIntelligenceDLC {

    private String id;

    @Override
    public void onLoad(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "DLC", id);
        logger.info("AI DLC loaded with ID: " + id);
    }

    @Override
    public void onDisload(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "DLC", id);
        logger.info("AI DLC unloaded with ID: " + id);
    }

    @Override
    public void setId(String id) {
        MCEngineApi.setId("example");
    }
}
```

## Description

This interface is designed for modular AI-based DLC content that extends gameplay or adds new features.

## Notes

- Use `onLoad` to add new AI-driven content.
- Unload properly to prevent leftover data or tasks.
