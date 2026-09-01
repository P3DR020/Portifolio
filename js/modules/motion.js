/* Uma única fonte de verdade pra "o usuário pediu menos movimento".
   Quem anima checa isso antes de começar. */

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
