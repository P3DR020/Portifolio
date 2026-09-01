/* Canvas do fundo do hero: pontos flutuando, ligados por linhas
   quando ficam perto. Calibrado pra não pesar no celular —
   a contagem sobe com a largura da tela e para em 70.

   Canvas não lê variável CSS: o âmbar está duplicado aqui.
   Ao mudar --accent em css/tokens.css, mudar ACCENT também. */

import { reduced } from './motion.js';

const ACCENT   = '255,180,84';
const BASE     = '255,255,255';
const LINK_DIST = 130;

export function initParticles(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;

  const ctx = canvas.getContext('2d');
  let dots = [];
  let raf = null;
  let w = 0, h = 0;

  const build = () => {
    /* teto de 2 no DPR: em telas 3x o ganho não paga o custo */
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    w = rect.width;
    h = rect.height;

    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(Math.round(w / 18), 70);

    dots = Array.from({ length:count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx:(Math.random() - .5) * .25,
      vy:(Math.random() - .5) * .25,
      r: Math.random() * 1.5 + .6,
      /* um em cada seis é âmbar, o resto é branco */
      hot: Math.random() < .17
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);

    for(let i = 0; i < dots.length; i++){
      const d = dots[i];

      d.x += d.vx;
      d.y += d.vy;

      /* atravessou a borda, volta pelo outro lado */
      if(d.x < 0) d.x = w; else if(d.x > w) d.x = 0;
      if(d.y < 0) d.y = h; else if(d.y > h) d.y = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${d.hot ? ACCENT : BASE},${d.hot ? .55 : .28})`;
      ctx.fill();

      /* só olha pra frente: cada par é testado uma vez */
      for(let j = i + 1; j < dots.length; j++){
        const o = dots[j];
        const dx = d.x - o.x;
        const dy = d.y - o.y;
        const dist = Math.hypot(dx, dy);
        if(dist > LINK_DIST) continue;

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(o.x, o.y);
        ctx.strokeStyle = `rgba(${BASE},${(1 - dist / LINK_DIST) * .1})`;
        ctx.stroke();
      }
    }

    raf = requestAnimationFrame(draw);
  };

  build();

  if(reduced){
    /* desenha um quadro parado e não liga o loop */
    draw();
    cancelAnimationFrame(raf);
    return;
  }

  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  }, { passive:true });

  /* aba em segundo plano não precisa de animação */
  document.addEventListener('visibilitychange', () => {
    if(document.hidden){
      cancelAnimationFrame(raf);
    }else{
      raf = requestAnimationFrame(draw);
    }
  });
}
