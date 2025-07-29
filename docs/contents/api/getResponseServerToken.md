## getResponse(String platform, String model, String message)

```java
/** Wrapper to getResponse using server token (returns JSON). */
public JsonObject getResponse(String platform, String model, String message) {
    return getResponse(platform, model, message);
}
```

**Usage:**
```java
JsonObject json = api.getResponse("openai", "gpt-4", "Tell me a joke.");
```

**Summary:**  
Shortcut to fetch JSON response using server token.
