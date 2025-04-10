const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  const icon = document.querySelector(".header-menu-mobile i");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
};

document.querySelector(".header-menu-mobile").addEventListener("click", openMenu);




window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.slider-content').classList.add('visible');
    }, 1000); // 2 secondes
  });

  
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('carousel-img');
  const modalVideo = document.getElementById('carousel-video');
  const modalDesc = document.getElementById('carousel-desc');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  let currentIndex = 0;
  let currentMedia = [];
  
  // Exemple : images + descriptions
  const imagesByCategory = {
    'Print': [
      { src: 'images/works/logo-pittpoule.jpg', desc: 'Logo pour un groupe de musique, style vintage.', type: 'image' },
      { src: 'images/works/logo-atcs.jpg', desc: 'Logo pour une entreprise de chauffagisme.', type: 'image' }, { src: 'images/works/logo-letheatredesbetises.jpg', desc: 'Logo pour une compagnie de théâtre.', type: 'image' }, { src: 'images/works/logo-paroleprod.jpg', desc: 'Logo pour une agence de production des artistes musicaux.', type: 'image' }, { src: 'images/works/logo-ms-services.jpg', desc: 'Logo pour une entreprise de nettoyage industriel.', type: 'image' }, { src: 'images/works/gîteduguizay-flyer.jpg', desc: 'Flyer pour un gîte.', type: 'image' }, { src: 'images/works/declicludik-flyer-rencontresludik-recto.jpg', desc: 'Flyer pour un évênement autour du jeu de société.', type: 'image' }, { src: 'images/works/pittpoule-affiche.jpg', desc: 'Affiche de promotion pour un groupe de musique.', type: 'image' }, { src: 'images/works/elzed-affiche-jauneindigo.jpg', desc: 'Affiche de promotion pour un groupe de musique.', type: 'image' }, { src: 'images/works/elzed-mockup-album-jaunecommelamor.jpg', desc: 'Mockup pour un album de musique.', type: 'image' }, { src: 'images/works/pittpoule-mockup-ep2019.jpg', desc: 'Mockup pour un album de musique.', type: 'image' },
    ],
    '3D': [
      { src: 'images/works/Rabbit-3D-droite.jpg', desc: 'Modélisation 3D d’un lapin pour jeu de société.', type: 'image' },
      { src: 'images/works/Rabbit-3D-gauche.jpg', desc: 'Modélisation 3D d’un lapin pour jeu de société.', type: 'image' }, { src: 'images/works/Rabbit-3D-dos.jpg', desc: 'Modélisation 3D d’un lapin pour jeu de société.', type: 'image' }, { src: 'images/works/3D-banqueaccueil.jpg', desc: 'Modélisation 3D d’une banque d’accueil.', type: 'image' }, { src: 'images/works/3D-banqueaccueil-photo.jpg', desc: 'Banque d’accueil réalisée par mes soins.', type: 'image' }, { src: 'images/works/3D-chevet.jpg', desc: 'Modélisation 3D d’un chevet.', type: 'image' },{ src: 'images/works/3D-chevet-photo.jpg', desc: 'Chevet, réalisé par mes soins.', type: 'image' },
    ],
    'Jeux de société': [
      { src: 'images/works/Illustration-Boite-JD.jpg', desc: 'Illustration pour une boîte de jeu de société.', type: 'image' }, { src: 'images/works/Illustration-cartes-JD.jpg', desc: 'Illustration de cartes pour un jeu de société.', type: 'image' }, { src: 'images/works/Illustration-photodefamille-JD.jpg', desc: 'Illustration de personnages pour un jeu de société.', type: 'image' }, { src: 'images/works/laguerredesdiadoques.png', desc: 'Illustration de cartes pour un jeu de société.', type: 'image' }, { src: 'images/works/Illustration-boite-WPF.jpg', desc: 'Illustration pour une boîte de jeu de société pour l’ONU.', type: 'image' },
    ],
    'Digital Painting': [
      { src: 'images/works/digitalpainting-first.jpg', desc: 'Peinture digitale inspirée des animaux et de la nature.', type: 'image' }, { src: 'images/works/digitalpainting-poivron.jpg', desc: 'Peinture digitale étude.', type: 'image' }, { src: 'images/works/digitalpainting-etudedemaitre.jpg', desc: 'Peinture digitale étude de peinture de maitre.', type: 'image' }, { src: 'images/works/digitalpainting-oiseau-fleurs.jpg', desc: 'Peinture digitale étude et reproduction.', type: 'image' }, { src: 'images/works/digitalpainting-bigrabbit.jpg', desc: 'Peinture digitale inspirée d’un personnage de jeu de société.', type: 'image' },
    ],
    'Web & Mobile': [
      { src: 'images/works/Pulse.jpg', desc: 'Logo pour une application mobile.', type: 'image' }, { src: 'images/works/pulse-UI-Kit.jpg', desc: 'UI Kit d’une application mobile.', type: 'image' }, { src: 'images/works/pulse-mockup.jpg', desc: 'Mockup d’une application mobile.', type: 'image' }, { src: 'images/videos/pulse-fonctionnement.mp4', desc: 'Fonctionnement de Pulse, une application mobile.', type: 'video' },
    ]
  };
  
  // Affiche l'élément courant (image ou vidéo)
  function updateCarousel() {
    const item = currentMedia[currentIndex];
    if (item.type === 'image') {
      modalImg.src = item.src;
      modalImg.style.display = 'block';
      modalVideo.style.display = 'none';
      modalVideo.pause();
    } else if (item.type === 'video') {
      modalVideo.src = item.src;
      modalVideo.style.display = 'block';
      modalImg.style.display = 'none';
    }
  
    modalDesc.textContent = item.desc;
  }
  
  // Navigation
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % currentMedia.length;
    updateCarousel();
  };
  
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
    updateCarousel();
  };
  
  // Fermer la modale
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    modalVideo.pause();
  };
  
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalVideo.pause();
    }
  };
  
  // Ouverture de la modale
  document.querySelectorAll('.realisation').forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.category;
      const entries = imagesByCategory[category];
  
      if (entries && entries.length > 0) {
        currentMedia = entries;
        currentIndex = 0;
        updateCarousel();
        modal.style.display = 'flex';
      }
    });
  });

  document.querySelectorAll('.header-menu a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector(".header-menu");
      const icon = document.querySelector(".header-menu-mobile i");
  
      // On ferme le menu
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  });
  

  
  


  


