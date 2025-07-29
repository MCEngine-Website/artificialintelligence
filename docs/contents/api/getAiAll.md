## getAiAll()

```java
/** Returns all registered AI models grouped by platform and model name. */
public Map<String, Map<String, IMCEngineArtificialIntelligenceApiModel>> getAiAll() {
    return (Map<String, Map<String, IMCEngineArtificialIntelligenceApiModel>>) (Map<?, ?>)
        MCEngineArtificialIntelligenceApiUtilAi.getAllModels();
}
```

**Usage:**
```java
Map<String, Map<String, IMCEngineArtificialIntelligenceApiModel>> allModels = api.getAiAll();
```

**Summary:**  
Returns a nested map of all registered models.
