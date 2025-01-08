const BoutonAfficherMenu = document.querySelector('.afficherLeMenu');

const PORT = document.getElementById('portfolio');
const MYHEADER = document.querySelector('.myHeader');
const NAV = document.querySelector('.menu');
const ContainerCompetence = document.querySelector('.containerCompetence');
const SectionCompetence = document.querySelector('.competenceSection');




BoutonAfficherMenu.onclick = function () {
    if (NAV.style.display === 'flex') {
        NAV.style.display = 'none';
        BoutonAfficherMenu.style.animation = 'rotateN 1s forwards'
    }
    else {
        BoutonAfficherMenu.style.animation = 'rotateP 1s forwards'
        NAV.style.display = 'flex';
    }

    MYHEADER.classList.toggle('headerHided');
    ContainerCompetence.classList.toggle('containerCompetenceHided');
    SectionCompetence.classList.toggle('competenceSectionHided');
    SectionCompetence.style.transition = '1s ease';
}



function showMoreDesign() {
    document.querySelector('.imageDesign').classList.toggle('imageDesignHide');
    document.querySelector('.plusInfoDivDesign').classList.toggle('plusInfoDivDesignShow');
}


function showMoreDevelopping() {
    document.querySelector('.imageDevelopping').classList.toggle('imageDeveloppingHide');
    document.querySelector('.plusInfoDivDevelopping').classList.toggle('plusInfoDivDeveloppingShow');
}


function showMoreLinguistique() {
    document.querySelector('.imageLignuistique').classList.toggle('imageLignuistiqueHide');
    document.querySelector('.plusInfoDivLinguistique').classList.toggle('plusInfoDivLinguistiqueShow');
}


function showMoreBureautique() {
    document.querySelector('.imageBureautique').classList.toggle('imageBureautiqueHide');
    document.querySelector('.plusInfoDivBureautique').classList.toggle('plusInfoDivBureautiqueShow');
}


function showMoreBatiment() {
    document.querySelector('.imageBatiment').classList.toggle('imageBatimentHide');
    document.querySelector('.plusInfoDivBatiment').classList.toggle('plusInfoDivBatimentShow');
}

