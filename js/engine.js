document.addEventListener("DOMContentLoaded", function () {
  // Passo 1: Identificar as seções
  const sections = ["hero", "introduction", "mission", "about", "professional", "contact"];

  // Passo 2: Obter referências para os elementos <li>
  const navItems = document.querySelectorAll("#nav-list ul li");

  // Passo 3: Adicionar um Event Listener de Rolagem
  window.addEventListener("scroll", function () {
    // Passo 4: Determinar a Seção Atual
    const currentPosition = window.scrollY;
    let currentSection = "";

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
        currentSection = sectionId;
        break;
      }
    }

    // Passo 5: Atualizar Classes
    navItems.forEach((item) => {
      const sectionId = item.querySelector("a").getAttribute("href").substring(1);
      item.classList.toggle("active", sectionId === currentSection);
    });
  });
});