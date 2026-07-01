# Dance Fix Notes

Fixed in this copy:

- Dance Switch indentation error fixed.
- Hungary tablet value now sends `hungarian`.
- Dance Switch accepts `hungarian`, `hungary`, and `02_Hungary`.
- Walk This Way sound path changed from missing `aerosmith__walk_this_way_107` file to existing `walk_this_way.ogg`.
- Tablet listens for `PepperFreshers/ReturnToDancePage` and returns to the dance selection screen after dance audio finishes.

Test order:

1. Open this project in Choregraphe.
2. Upload to Pepper.
3. Start the app.
4. Go to Pepper Dance.
5. Test Dance of the Knights.
6. Test Walk This Way.
7. Test Hungary.
