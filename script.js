const revealElements = document.querySelectorAll('.card, .service-box');

window.addEventListener('scroll', () => {

  revealElements.forEach((element) => {

    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      element.style.opacity = '1';
      element.style.transform = 'translateY(0px)';
    }

  });

});

revealElements.forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(40px)';
  element.style.transition = 'all 0.8s ease';
});