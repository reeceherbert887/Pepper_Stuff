# Pepper Freshers full fix

This version is based on the working project structure, not the broken nested generated copy.

Fixed:
- HTML buttons now send the correct values.
- Local laptop mode works without QiSession.
- Pepper mode uses ALMemory event `PepperFreshers/DanceSelected`.
- Hungary uses `02_Hungary` but Dance Switch also accepts `hungary` and `hungarian`.
- Refreshers buttons store `PepperFreshers/RefreshersSelected` then launch `DanceSelected = refreshers`.
- Dance Switch uses existing outputs: `dance_knights`, `walk_this_way`, `hungarian`, `refreshers`, `unknown`.
- RefreshersTemplate directly plays Bees / Surprise / Speech media using the chosen Refreshers value.

Important:
- Do not rename the Dance Switch outputs to `onRefreshers` or `onHungary` in this version.
- The outputs used here are `refreshers` and `hungarian` because those already exist in the Choregraphe graph.
