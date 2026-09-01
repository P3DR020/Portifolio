/* As três animações de texto do hero:
   1. a linha de terminal que se escreve sozinha
   2. o nome, letra por letra
   3. os cargos, que entram e saem em loop

   Com reduced-motion, tudo aparece pronto e o loop nem começa. */

import { reduced } from './motion.js';

const BOOT = 'npx criar-portfolio --dev';

export function initHeroText(roles = []){
  bootLine();
  splitName();
  rotateRoles(roles);
}

/* ---- 1. linha de terminal ---- */

function bootLine(){
  const el = document.getElementById('boot');
  if(!el) return;

  if(reduced){
    el.textContent = BOOT;
    return;
  }

  let i = 0;
  const type = () => {
    el.textContent = BOOT.slice(0, ++i);
    if(i < BOOT.length) setTimeout(type, 55);
  };

  setTimeout(type, 300);
}

/* ---- 2. nome letra a letra ---- */

function splitName(){
  const el = document.getElementById('name');
  if(!el) return;

  /* o ponto final tem cor própria e fica de fora da quebra */
  const dot = el.querySelector('.dot');
  const text = (dot ? el.textContent.replace(dot.textContent, '') : el.textContent).trim();

  if(reduced) return;

  el.textContent = '';

  [...text].forEach((ch,i) => {
    const span = document.createElement('span');
    span.className = 'ch';
    /* espaço vira nbsp, senão o inline-block colapsa */
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.style.animationDelay = `${900 + i * 45}ms`;
    el.appendChild(span);
  });

  if(dot) el.appendChild(dot);
}

/* ---- 3. cargos rotativos ---- */

function rotateRoles(roles){
  const el = document.getElementById('typed');
  if(!el || !roles.length) return;

  if(reduced){
    el.textContent = roles[0];
    return;
  }

  let idx = 0;
  let chars = 0;
  let erasing = false;

  const loop = () => {
    const word = roles[idx];

    chars += erasing ? -1 : 1;
    el.textContent = word.slice(0, chars);

    let delay = erasing ? 34 : 68;

    if(!erasing && chars === word.length){
      /* pausa pra dar tempo de ler antes de apagar */
      erasing = true;
      delay = 1700;
    }else if(erasing && chars === 0){
      erasing = false;
      idx = (idx + 1) % roles.length;
      delay = 320;
    }

    setTimeout(loop, delay);
  };

  setTimeout(loop, 1500);
}
