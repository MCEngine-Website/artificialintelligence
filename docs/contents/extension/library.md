# AI Library Module Usage Guide

**Path:** `com.example.MyAILibrary.java`
[`Example Repository`](https://github.com/MCEngine-Extension/artificialintelligence-library-example)

This document explains how to implement the `IMCEngineArtificialIntelligenceLibrary` interface to create an AI backend library for the MCEngine.

## Interface

```java
package com.example;

import io.github.mcengine.api.artificialintelligence.extension.library.IMCEngineArtificialIntelligenceLibrary;
import io.github.mcengine.api.core.MCEngineCoreApi;
import io.github.mcengine.api.core.extension.logger.MCEngineExtensionLogger;
import org.bukkit.plugin.Plugin;

public class MyAILibrary implements IMCEngineArtificialIntelligenceLibrary {

    private String id;

    @Override
    public void onLoad(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "Library", id);
        logger.info("AI Library loaded with ID: " + id);
    }

    @Override
    public void onDisload(Plugin plugin) {
        MCEngineExtensionLogger logger = new MCEngineExtensionLogger(plugin, "Library", id);
        logger.info("AI Library unloaded with ID: " + id);
    }

    @Override
    public void setId(String id) {
        MCEngineCoreApi.setId("artificialintelligence-example-library");
    }
}
```

## Description

Use this interface to develop supporting libraries for AI logic, services, or internal systems. Libraries typically don't involve direct player interaction.

## Notes

- Useful for shared AI tools or logic across multiple modules.
- Can be dependency providers for AddOns or DLCs.
