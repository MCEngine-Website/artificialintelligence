# How It Works

1. Use `/ai report <player> <message>` to add a report entry to the database.  
2. Use `/ai report <player> <platform> <model>` to retrieve and process reports for the specified player.  
   - Once processed, reports are moved from the main table to the history table.  
   - Only unprocessed reports from the main table will be included.
