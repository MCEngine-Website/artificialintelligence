## registerModel(Plugin plugin, String platform, String model)

```java
/**
 * Registers a model under the specified platform if not already registered.
 */
public void registerModel(Plugin plugin, String platform, String model) {
    MCEngineArtificialIntelligenceApiUtilAi.registerModel(plugin, platform, model);
}
```

**Usage:**
```java
api.registerModel(plugin, "openai", "gpt-4o");
```

**Summary:**  
Registers an AI model under a specific platform.
