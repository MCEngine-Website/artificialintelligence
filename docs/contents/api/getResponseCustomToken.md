## getResponse(String platform, String model, String token, String message)

```java
/** Wrapper to getResponse using custom token (returns JSON). */
public JsonObject getResponse(String platform, String model, String token, String message) {
    return getResponse(platform, model, token, message);
}
```

**Usage:**
```java
JsonObject json = api.getResponse("openrouter", "custom", "abc123", "What is love?");
```

**Summary:**  
Shortcut to fetch JSON response using custom token.
