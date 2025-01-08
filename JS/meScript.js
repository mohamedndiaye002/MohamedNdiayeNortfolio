const BoutonAfficherMenu = document.querySelector('.afficherLeMenu');
const PORT = document.getElementById('portfolio');
const MYHEADER = document.querySelector('.myHeader');
const NAV = document.querySelector('.menu');
const ContainerMe = document.querySelector('.containerMe');
const BGsection = document.querySelector('.meSectionBG');
const Profil = document.querySelector('.profil');


BoutonAfficherMenu.onclick = function(){
    if (NAV.style.display === 'flex') {
      NAV.style.display = 'none';
      BoutonAfficherMenu.style.animation = 'rotateN 1s forwards'
    }
    else {
      BoutonAfficherMenu.style.animation = 'rotateP 1s forwards'
      NAV.style.display = 'flex';
    }
    Profil.classList.toggle('profilHided');
    PORT.classList.toggle('portfolio');
    MYHEADER.classList.toggle('headerHided');
    ContainerMe.classList.toggle('containerMeHided');
    BGsection.classList.toggle('meSectionBGHided');
  
  }