# How does it work?

## Player Command:
```
/ai chatbot openai gpt-4
```

This command starts the player chat listener.  
The player can then send messages (not commands).  
The chat includes message history as well:
- It works as: previousChat + newPrompt  

Type `"quit"` to exit. This will also clear the message history.
