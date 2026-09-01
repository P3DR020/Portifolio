/* Tudo que reage ao scroll ou ao menu:
   barra de progresso, fundo do header, scrollspy e drawer mobile. */

export function initScrollUI(){
  const bar    = document.getElementById('progress');
  const topbar = document.getElementById('topbar');
  const links  = [...document.querySelectorAll('#topbar ul a')];
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  let ticking = false;

  const update = () => {
    ticking = false;

    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    if(bar) bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    if(topbar) topbar.classList.toggle('solid', y > 40);

    /* scrollspy: vale a última seção cujo topo já passou de 1/3 da tela */
    const line = y + window.innerHeight / 3;
    let current = -1;

    sections.forEach((section,i) => {
      if(section.offsetTop <= line) current = i;
    });

    links.forEach((a,i) => a.classList.toggle('active', i === current));
  };

  const onScroll = () => {
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll, { passive:true });
  update();
}

export function initDrawer(){
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  if(!burger || !drawer) return;

  const setOpen = (open) => {
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    /* trava o scroll do fundo enquanto o menu está aberto */
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => {
    setOpen(!drawer.classList.contains('open'));
  });

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setOpen(false);
  });
}
