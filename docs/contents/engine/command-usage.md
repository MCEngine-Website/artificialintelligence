# Command Usage

(Note: These commands do not require permissions since they don't affect other players.)

## Set token to database

(Token is encrypted before saving)
```
/ai default set token {platform} <token>
```

## Additional info for set token

The API provides a method `getPlayerToken` which returns the player’s token in its encrypted form.  
It is decrypted only when sending requests to the AI server.

## Important

If you attempt to manually decrypt a player’s token, you may face legal consequences.  
I, the owner and developer, will not be responsible for any misuse or attempts to reverse-engineer player tokens.
