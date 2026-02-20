const ctaButton = document.getElementById('cta');

ctaButton?.addEventListener('click', () => {
  const message =
    'Hola, quiero hacer un pedido en Moster Burger para mi perrito. ¿Me ayudan con una recomendación?';

  window.open(`https://wa.me/525512345678?text=${encodeURIComponent(message)}`, '_blank');
});
