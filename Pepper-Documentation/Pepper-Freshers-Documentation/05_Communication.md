# Communication

## Event Flow

```mermaid
sequenceDiagram
participant User
participant Tablet
participant JS
participant ALMemory
participant Python
participant Pepper

User->>Tablet: Press button
Tablet->>JS: Click event
JS->>ALMemory: Write value
ALMemory->>Python: Notify
Python->>Pepper: Execute behaviour
```
