document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn d-md-none';
  mobileMenuBtn.innerHTML = '☰';
  
  const header = document.querySelector('header .container');
  header.appendChild(mobileMenuBtn);
  
  mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.texts').classList.toggle('mobile-visible');
  });
  
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalOverlay");
  const openBtn = document.querySelector('.button[href="#"]');
  const closeBtn = document.getElementById("closeModalBtn");

  modal.style.display = "none";
  openBtn.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

  document.getElementById('webinarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = this.querySelector('input[name="name"]');
    const phoneInput = this.querySelector('input[name="phone"]');
    
    [nameInput, phoneInput].forEach(input => {
      const parent = input.parentElement;
      let error = parent.querySelector('.error-message');

      if (input.value.trim() === '') {
        if (!error) {
          error = document.createElement('div');
          error.className = 'error-message';
          error.textContent = 'Нічого не введено';
          parent.appendChild(error);
        }
        input.classList.add('input-error');
      } else {
        if (error) error.remove();
        input.classList.remove('input-error');
      }
    });
  });

  const swiper = new Swiper('.swiper-container', {
    loop: false,
    speed: 500,
    grabCursor: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  const leftBtn = document.querySelector('.arrow-left');
  const rightBtn = document.querySelector('.arrow-right');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      swiper.slidePrev();
    });

    rightBtn.addEventListener('click', () => {
      swiper.slideNext();
    });
  }
});
