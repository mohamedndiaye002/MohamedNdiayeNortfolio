const BoutonAfficherMenu = document.querySelector('.afficherLeMenu');

const ContainerContact = document.querySelector('.containerContact');
const SectionContact = document.querySelector('.contactSection');
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
    ContainerContact.classList.toggle('containerContactHided');
    SectionContact.classList.toggle('contactSectionHided');
    SectionContact.style.transition ='1s ease';
  }