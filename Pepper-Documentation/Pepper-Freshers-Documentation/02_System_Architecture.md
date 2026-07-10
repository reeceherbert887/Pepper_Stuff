# System Architecture

## Overview

```mermaid
flowchart TD
Tablet-->HTML
HTML-->JavaScript
JavaScript-->ALMemory
ALMemory-->Python
Python-->Choregraphe
Choregraphe-->Pepper
```

Each layer has a single responsibility which makes debugging easier and future expansion simpler.
