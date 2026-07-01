# Refreshers UI Fix Notes

This version keeps the quiz section unchanged.

Changed:
- `html/index.html`
  - bumped cache versions to `v=5`
  - fixed Hungary button to send `02_Hungary`
  - added a reusable playing screen message / local preview area

- `html/script.js`
  - works locally without Pepper
  - local dance audio preview works
  - local Refreshers preview works for Bees / Surprise / Speech
  - Pepper mode raises:
    - `PepperFreshers/DanceSelected`
    - `PepperFreshers/RefreshersSelected`

- `behavior_1/behavior.xar`
  - fixed the Dance Switch Python code
  - accepts:
    - `dance_knights`
    - `walk_this_way`
    - `02_Hungary`
    - `hungarian`
    - `hungary`
    - `refreshers`
    - `Refreshers`
    - `Bees`
    - `Surprise`
    - `Speech`

Important:
- Bees / Surprise / Speech currently all launch the Refreshers Choregraphe output.
- If you want each Refreshers button to trigger a totally separate Choregraphe branch, add separate outputs later:
  - `bees`
  - `surprise`
  - `speech`
