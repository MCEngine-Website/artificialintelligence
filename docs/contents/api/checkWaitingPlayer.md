## checkWaitingPlayer(Player player)

```java
/** Checks if the player is marked as waiting. */
public boolean checkWaitingPlayer(Player player) {
    return MCEngineArtificialIntelligenceApiUtilBotManager.isWaiting(player);
}
```

**Usage:**
```java
boolean isWaiting = api.checkWaitingPlayer(player);
```

**Summary:**  
Returns true if the player is in a waiting state for AI output.
