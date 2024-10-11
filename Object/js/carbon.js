document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', function() {
      document.querySelector('.page.active').classList.remove('active');
      this.classList.add('active');
    });
  });