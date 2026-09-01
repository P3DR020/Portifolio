/* Entrada dos elementos .reveal conforme entram na tela.
   Observa uma vez e desliga — não faz nada no scroll de volta. */

import { reduced } from './motion.js';

export function initReveal(){
  const items = document.querySelectorAll('.reveal');

  if(reduced){
    items.forEach(el => el.classList.add('on'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('on');
      io.unobserve(entry.target);
    });
  },{ threshold:.12, rootMargin:'0px 0px -60px' });

  items.forEach((el,i) => {
    /* escadinha curta entre irmãos, senão a seção inteira pisca junto */
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
    io.observe(el);
  });
}
