## getResponse(String platform, String model, String message)

```java
/** Sends a prompt using a server token and returns full JSON. */
public JsonObject getResponse(String platform, String model, String message)
```

**Usage:**
```java
JsonObject response = common.getResponse("openai", "gpt-4", "Tell me a story.");
```

**Summary:**  
Sends a message to the AI using a server-configured token.
