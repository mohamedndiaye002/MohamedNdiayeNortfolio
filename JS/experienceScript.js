const BoutonAfficherMenu = document.querySelector('.afficherLeMenu');

const ContainerExperience = document.querySelector('.containerExperience');
const SectionExperience = document.querySelector('.experienceSection');
const PORT = document.getElementById('portfolio');
const MYHEADER = document.querySelector('.myHeader');
const NAV = document.querySelector('.menu');
BoutonAfficherMenu.onclick = function() {
    if (NAV.style.display === 'flex') {
      NAV.style.display = 'none';
      BoutonAfficherMenu.style.animation = 'rotateN 1s forwards'
    }
    else {
      BoutonAfficherMenu.style.animation = 'rotateP 1s forwards'
      NAV.style.display = 'flex';
    }
    
    MYHEADER.classList.toggle('headerHided');
    ContainerExperience.classList.toggle('containerExperienceHided');
    SectionExperience.classList.toggle('exerienceSectionHided');
    SectionExperience.style.transition ='1s ease';
  }