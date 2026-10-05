const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('.menu');
menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// TROQUE pelo número real do WhatsApp, apenas números com código do país.
const whatsappNumber='244900000000';
const wa=document.getElementById('wa');
wa.href=`https://wa.me/${whatsappNumber}`;

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const child=document.getElementById('child').value.trim();
  const age=document.getElementById('age').value.trim();
  const msg=document.getElementById('message').value.trim();
  const text=`Olá! Gostaria de agendar uma visita ao Cantinho da Lwinnie.%0A%0ANome: ${encodeURIComponent(name)}%0ACriança: ${encodeURIComponent(child)}%0AIdade: ${encodeURIComponent(age)}%0ADia/horário: ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`,'_blank');
});
