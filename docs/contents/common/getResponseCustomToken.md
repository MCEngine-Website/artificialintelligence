## getResponse(String platform, String model, String token, String message)

```java
/** Sends a prompt using a custom token and returns full JSON. */
public JsonObject getResponse(String platform, String model, String token, String message)
```

**Usage:**
```java
JsonObject response = common.getResponse("openrouter", "custom", "my-token", "How are you?");
```

**Summary:**  
Sends a message to the AI using a specified token.
