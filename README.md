# SpaceBert

A free, retro-flavored cube-hopper with modern neon graphics and a head nod to classic arcade pyramid-hopping games. Hop a little orange alien around a glowing pyramid of cubes until every cube has changed colour, dodge the space snake and the bouncing balls, and ride the rainbow discs back to the top when you are cornered.

**Play it in your browser:** https://nbwillcox.github.io/SpaceBert/

Everything is generated in code: sprites are vector-drawn on the fly, and all sound effects and music are synthesized with the Web Audio API. There are no image or audio files and no build step. A sibling of [SpaceBricks](https://github.com/nbwillcox/SpaceBricks), [SpaceKong](https://github.com/nbwillcox/SpaceKong), [SpaceQix](https://github.com/nbwillcox/SpaceQix) and the other Space games, with the same look and feel.

## Controls

| Action | Keys |
| --- | --- |
| Hop up-left / up-right | `Q` / `E` (numpad `7` / `9`) |
| Hop down-left / down-right | `Z` / `C` (numpad `1` / `3`) |
| Hop toward a click | Click a spot on the screen: the hero hops toward that corner of himself |
| Pause | `P` or `Esc` |

### On a phone or tablet

Play in portrait. Tap the four diagonal buttons to hop up-left, up-right, down-left or down-right (tapping the screen on a side of the hero works too). The pause button opens the menu. The on-screen controls appear on touch devices automatically; Settings has size, opacity and a left-handed layout. Use your browser's *Add to Home Screen* to install it as a full-screen app.

## Gameplay

- **Hop every cube** until the whole pyramid has changed colour. The sample cubes in the top-left show the colour sequence for the round. A hop off the edge is a fall (unless a disc is waiting there).
- **Levels cycle through four rules:** one hop to the target colour, two hops through an in-between colour, *hop on, hop off* (landing on a finished cube turns it back), and a three-colour cycle that never settles until you stop on the right one. Every level has four rounds and a new colour scheme.
- **Enemies:**
  - **Red spiky balls** tumble down the pyramid: touching one costs a life.
  - **Purple eggs** drop in too; at the bottom they hatch into **the space snake**, which hunts you hop by hop.
  - **Green balls** freeze every enemy for a few seconds when you catch them (100 points).
  - **Slick and Sam** (the shades-wearing gremlins) undo your work, flipping cubes back a step; catch them for 300 points.
  - **Ugg and Wrongway** climb the outside edges and pounce sideways onto edge cubes.
- **Flying discs** wait on the sides of the pyramid. Hop onto one and it carries you to the top: any snake chasing you follows you off the edge for 500 points. Discs you have not used when a round ends are worth 50 each.
- **Scoring:** 25 points for every cube that moves toward its goal, a round bonus that grows each level, an extra life at 10,000 points and every 20,000 after that. You start with 3 lives. Your top 10 scores are kept in your browser.

## Debug / URL flags

`?stage=N` start at stage N (4 rounds per level), `?lives=N`, `?god=1` (enemies cannot hurt you), `?bot=1` (autopilot plays), `?touch=1` (force the touch controls on a desktop).

## Running locally

No build step: open `index.html` in a browser, or serve the folder with any static server (for example `python -m http.server`).

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/): free to play and share, not for commercial use.
