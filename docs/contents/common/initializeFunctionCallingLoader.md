## initializeFunctionCallingLoader(String folderPath, Logger logger)

```java
/**
 * Initializes the function-calling rule loader for chatbot behavior matching.
 *
 * @param folderPath Path to the rules directory (relative to plugin data folder).
 * @param logger     Logger for diagnostic output.
 */
public void initializeFunctionCallingLoader(String folderPath, Logger logger) {
    api.initializeFunctionCallingLoader(plugin, folderPath, logger);
}
```

**Usage:**
```java
chatbot.initializeFunctionCallingLoader("rules/chat", getLogger());
```

**Summary:**  
Sets up the rule loader using the provided folder path and logger, enabling rule-based chatbot behavior handling.
