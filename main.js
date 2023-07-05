function togglebar() {
    var navResponsiveElements = document.getElementsByClassName('dropdown-menu');
    var togglebarElements = document.getElementsByClassName('toggle');
  
    for (var i = 0; i < navResponsiveElements.length; i++) {
      navResponsiveElements[i].classList.toggle('active');
    }
  
    for (var j = 0; j < togglebarElements.length; j++) {
      togglebarElements[j].classList.toggle('change');
    }
  }


  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const bannerImages = document.querySelector('.banner-images');
  const images = bannerImages.querySelectorAll('.banner-img');
  let currentIndex = 0;
  
  // Function to show the current image
  function showImage(index) {
    const offset = -index * 100;
    bannerImages.style.transform = `translateX(${offset}vw)`;
  }
  
  // Event listener for prevButton
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });
  
  // Event listener for nextButton
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  });
  
  // Show the initial image
  showImage(currentIndex);
  

  