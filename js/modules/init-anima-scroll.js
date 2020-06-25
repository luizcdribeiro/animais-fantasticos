export default function iniciaAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  let windowMetade;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisivel = (sectionTop - windowMetade) < 0;
      if (sectionVisivel) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    windowMetade = window.innerHeight * 0.6;
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}