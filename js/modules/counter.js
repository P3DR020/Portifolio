/* Conta de 0 até data-count quando o bloco aparece. */

import { reduced } from './motion.js';

export function initCounter(){
  const el = document.querySelector('[data-count]');
  if(!el) return;

  const target = Number(el.dataset.count) || 0;

  if(reduced){
    el.textContent = target;
    return;
  }

  const io = new IntersectionObserver((entries) => {
    if(!entries[0].isIntersecting) return;
    io.disconnect();

    const DURATION = 1100;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      /* easeOutCubic: corre no começo, encosta devagar no número */
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if(p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  },{ threshold:.5 });

  io.observe(el);
}
