1. write a new saga called `gameSaga`, this saga must react to `GAME_START_REQUESTED` events and change the game state accordingly. D

2. add a new reducer called `targets`, and change `GameLayout`, to render `<Target>` elements for each item in this state (hint: use a default state) D

3. Add a button to stop the game. When the game is stopped, it must be reset. D

4. implement these rules in using sagas:

- when a target is clicked, it is destroyed, D
- when a target is destroyed, the score is incremented by 1, D
- when a target dies by itself, the lives are decremented by 1, D
- each `TIME_INTERVAL` (defaults to 1 second), the target value decrements by 1, D
- a target dies by itself when its value reaches 0, D
- each time the value of a target decrements, its `backgroundColor` must change. D

5. update your game:

- each time a target is spawned, its coordinates are randomly chosen (but bound to the size of the game layout) D
- every seconds, one target is spawned D
- after 5 killed targets, two are spawned every second D
- after 15 killed targets, three are spawned D
- whenever the player kills 3 targets without losing a life, the `scoreMultiplier` is doubled
- whenever the player loses one life, the `scoreMultiplier` is reset to 1

rule: all of this must be handled from the sagas
(e.g: you can not send events from your react components to do that).

5. Add a way to increase difficulty by changing `TIME_INTERVAL`. 

6. Make this game fun. No time due to finals... I suck at learning maths.
   (all bonii must be listed when you deliver your game to your bored teacher)
