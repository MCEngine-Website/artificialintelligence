# Important Notes

The API includes two response-fetching methods:
- One uses the server token  
- The other uses the player's token  

Each plugin, addon, or DLC may use a different method — make sure to check which one is being used.

## For multiple model usage:

- If the same model and platform are used, the system will reuse the same instance to avoid duplication and save memory.  
- However, if you use multiple models (e.g., `{platform}:{model}`), each will create a separate instance.  
  This can lead to higher RAM usage. If your server has sufficient RAM, this should not be an issue.
