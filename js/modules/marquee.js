/* Duplica o conteúdo de cada faixa pra emenda ficar invisível.
   O CSS anda -50%; por isso o conteúdo precisa estar exatamente 2x. */

export function initMarquee(){
  document.querySelectorAll('[data-marquee]').forEach(track => {
    track.append(...Array.from(track.children).map(el => el.cloneNode(true)));
  });
}
