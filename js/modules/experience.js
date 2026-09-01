/* Botão "mostrar mais" da carreira. Revela os .hidden-job
   e some, já que não tem volta. */

export function initExperience(){
  const btn = document.getElementById('more');
  if(!btn) return;

  const hidden = document.querySelectorAll('.hidden-job');

  if(!hidden.length){
    btn.remove();
    return;
  }

  /* o HTML traz "(1 oculto)" chumbado — aqui vira a contagem real */
  const label = btn.querySelector('span');
  if(label) label.textContent = `(${hidden.length} oculto${hidden.length > 1 ? 's' : ''})`;

  btn.addEventListener('click', () => {
    hidden.forEach(job => job.classList.add('show','on'));
    btn.remove();
  });
}
