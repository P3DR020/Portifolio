/* ============================================================
   MAIN — único script ligado no index.html.
   Só liga os módulos e guarda o conteúdo configurável.
   Lógica nova vai num módulo em js/modules/, nunca aqui.
   ============================================================ */

import { initHeroText }  from './modules/hero-text.js';
import { initParticles } from './modules/particles.js';
import { initReveal }    from './modules/reveal.js';
import { initMarquee }   from './modules/marquee.js';
import { initCounter }   from './modules/counter.js';
import { initScrollUI, initDrawer } from './modules/nav.js';
import { initExperience } from './modules/experience.js';

/* Cargos que giram embaixo do nome. Edite à vontade. */
const ROLES = [
  'Desenvolvedor Web',
  'Front-end com React & TypeScript',
  'Designer que aprendeu a programar',
  'Ciência da Computação — UNIFACS'
];

initHeroText(ROLES);
initParticles();
initMarquee();
initReveal();
initCounter();
initScrollUI();
initDrawer();
initExperience();

document.getElementById('year').textContent = new Date().getFullYear();
