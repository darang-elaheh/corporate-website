const modalEl = document.getElementById('video-modal');
const videoEl = modalEl.querySelector('video');
const closeBtn = modalEl.querySelector('.my-btn-close');

// video control
  closeBtn.addEventListener('click', () => {
    if (videoEl && !videoEl.paused) {
      videoEl.pause(); 
      videoEl.currentTime = 0;
    }
  });

  modalEl.addEventListener('hidden.bs.modal', () => {
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  });


  // slider
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
        spaceBetween: 30,
      centeredSlides: true,
   autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
});