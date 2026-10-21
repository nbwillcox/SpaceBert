(function (G) {
  'use strict';

  const C = {
    W: 600,
    H: 800,
    REPO: 'https://github.com/nbwillcox/SpaceBert',
    // isometric pyramid: half width / half height of a cube's top diamond, height of its side faces
    ROWS: 7, HW: 38, HH: 19, D: 38, CX: 300, Y0: 215,
    HOP: 0.2, START_LIVES: 3,
    EXTRA_LIFE_AT: 10000, EXTRA_LIFE_EVERY: 20000,
    ROUNDS: 4,
  };
  C.DY = C.HH + C.D;                                        /* screen distance between two rows of cubes */

  const KEY = 'spacebert.settings.v1';
  const defaults = { master: 0.8, music: 0.6, sfx: 0.9, bloom: true, shake: true, reduced: false };

  const S = Object.assign({}, defaults);
  let hadSaved = false;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) { Object.assign(S, JSON.parse(raw)); hadSaved = true; }
  } catch (e) { /* storage unavailable */ }
  S.save = function () {
    try {
      const o = {};
      for (const k in defaults) o[k] = S[k];
      localStorage.setItem(KEY, JSON.stringify(o));
    } catch (e) { /* ignore */ }
  };
  if (!hadSaved && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    S.reduced = true;
  }
  G.C = C;
  G.settings = S;
})((window.SGS = window.SGS || {}));
