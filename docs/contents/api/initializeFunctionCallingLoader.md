## initializeFunctionCallingLoader(Plugin plugin, String folderPath, Logger logger)

```java
/**
 * Initializes the FunctionCallingLoader for rule matching.
 *
 * @param plugin The plugin instance.
 * @param folderPath Path to rule directory relative to plugin's data folder.
 * @param logger The logger used for messages.
 */
public void initializeFunctionCallingLoader(Plugin plugin, String folderPath, Logger logger) {
    this.logger = logger;
    this.functionCallingLoader = new FunctionCallingLoader(plugin, folderPath, logger);
}
```

**Usage:**
```java
api.initializeFunctionCallingLoader(this, "rules", getLogger());
```

**Summary:**  
Initializes the function-calling loader with the specified rule directory and logger for handling dynamic message matching.
