# config.yml
```
enable: false

# Database support
# - sqlite
# - mysql
# - postgresql
database:
  type: sqlite

  sqlite:
    path: artificialintelligence.db

  mysql:
    host: localhost
    port: "3306"
    name: mcengine
    user: root
    password: ""

  postgresql:
    host: localhost
    port: "5432"
    name: mcengine
    user: postgres
    password: ""

token:
  # Used to encrypt player tokens before saving them to the database
  # Must have a length of 16 characters
  secretKey:

ai:
  custom:
    # You can define multiple servers under "custom"
    # Each server can have its own URL, token, and default model

    server1:
      # API endpoint URL for server1
      url: http://localhost:11434/v1/chat/completions
      # Authorization token for server1
      token:
      # Default model name for server1
      models:
        model1: model1

    server2:
      # API endpoint URL for server2
      url: http://localhost:11435/v1/chat/completions
      # Authorization token for server2
      token:
      # Default model name for server2
      models:
        model1: model1
        model2: model2

  deepseek:
    token:
    # Default model loaded when the plugin starts
    models:
      model1:

  openai:
    token:
    # Default model loaded when the plugin starts
    models:
      model1:

  openrouter:
    token:
    # Default model loaded when the plugin starts
    models:
      model1:

# Function calling
function-calling:
  path: rules
```
