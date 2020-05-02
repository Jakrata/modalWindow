window.addEventListener('load', function(){
  const overlay = document.querySelector('.modal-overlay');
  const modals = document.querySelectorAll('.modal-item');
  const modalClose = document.querySelector('.modal__close');
  const modalBtn = document.querySelectorAll('button[data-modal]');

  modalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      overlay.classList.add('modal-overlay__active');

      let modal = e.target.getAttribute('data-modal');
      modals.forEach(item => {
        if (item.getAttribute('data-modal') == modal) {
          item.classList.add('modal-item__df');

          document.body.style.overflowY = "hidden";  

          setTimeout(() => {
            item.classList.add('modal-item__active');
          }, 200);
        }
      });
    });
  });

  modalClose.addEventListener('click', () => {
    modalCloseFunc();
  });

  function modalCloseFunc() {
    modals.forEach(item => {
      item.classList.remove('modal-item__active');
    });

    document.body.style.overflowY = "";  

    setTimeout(() => {
      overlay.classList.remove('modal-overlay__active');
      modals.forEach(item => {
        item.classList.remove('modal-item__df');
      });
    }, 200);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      modalCloseFunc();
    }
  });
});