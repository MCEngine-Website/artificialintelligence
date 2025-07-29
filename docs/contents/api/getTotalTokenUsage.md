## getTotalTokenUsage(JsonObject responseJson)

```java
/** Extracts total token usage from AI response JSON. */
public int getTotalTokenUsage(JsonObject responseJson) {
    return MCEngineArtificialIntelligenceApiUtilAi.getTotalTokenUsage(responseJson);
}
```

**Usage:**
```java
int tokensUsed = api.getTotalTokenUsage(response);
```

**Summary:**  
Returns total token count used in the request-response cycle.
