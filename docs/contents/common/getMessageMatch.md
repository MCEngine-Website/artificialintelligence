## getMessageMatch(Player player, String msg)

```java
/**
 * Matches a player message against predefined rule-based functions and returns the first response match.
 *
 * @param player The player who sent the message.
 * @param msg    The message content to match.
 * @return A resolved response string, or {@code null} if no match is found.
 */
public String getMessageMatch(Player player, String msg) {
    return api.getMessageMatch(player, msg);
}
```

**Usage:**
```java
String response = chatbot.getMessageMatch(player, "tell me a joke");
if (response != null) {
    player.sendMessage(response);
}
```

**Summary:**  
Delegates the message to the rule-based API for function matching and returns the first matched response string or null if no rule applies.
