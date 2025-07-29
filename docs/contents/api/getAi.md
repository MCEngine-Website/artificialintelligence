## getAi(String platform, String model)

```java
/** Retrieves an AI model instance by platform and model name. */
public IMCEngineArtificialIntelligenceApiModel getAi(String platform, String model) {
    return MCEngineArtificialIntelligenceApiUtilAi.getAi(platform, model);
}
```

**Usage:**
```java
IMCEngineArtificialIntelligenceApiModel model = api.getAi("openai", "gpt-4");
```

**Summary:**  
Fetches a registered model instance.
