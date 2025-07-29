## runBotTask(...)

```java
/** Executes an AI bot task asynchronously. */
public void runBotTask(Plugin plugin, IMCEngineArtificialIntelligenceDB db, Player player, String tokenType, String platform, String model, String message) {
    new MCEngineArtificialIntelligenceApiUtilBotTask(plugin, this, db, tokenType, player, platform, model, message)
        .runTaskAsynchronously(plugin);
}
```

**Usage:**
```java
api.runBotTask(plugin, db, player, "player", "openai", "gpt-4", "Write a story.");
```

**Summary:**  
Asynchronously runs a task that sends a message to an AI model and processes the response.
