## getCompletionContent(JsonObject responseJson)

```java
/** Extracts text content from AI response JSON. */
public String getCompletionContent(JsonObject responseJson) {
    return MCEngineArtificialIntelligenceApiUtilAi.getCompletionContent(responseJson);
}
```

**Usage:**
```java
String content = api.getCompletionContent(response);
```

**Summary:**  
Extracts the message content from the full AI response JSON.
