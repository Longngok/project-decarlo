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


// Lấy các phần tử cần sử dụng
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const bannerImages = document.querySelector(".banner-images");

// Định nghĩa biến để theo dõi vị trí hiện tại của ảnh
let currentPosition = 0;

// Xử lý sự kiện click cho nút Prev
prevButton.addEventListener("click", () => {
  currentPosition -= 100; // Điều chỉnh vị trí hiển thị lùi lại 100%
  if (currentPosition < 0) {
    currentPosition = 100 * (bannerImages.childElementCount - 1);
  }
  bannerImages.style.transform = `translateX(-${currentPosition}%)`;
});

// Xử lý sự kiện click cho nút Next
nextButton.addEventListener("click", () => {
  currentPosition += 100; // Điều chỉnh vị trí hiển thị tiến lên 100%
  if (currentPosition > 100 * (bannerImages.childElementCount - 1)) {
    currentPosition = 0;
  }
  bannerImages.style.transform = `translateX(-${currentPosition}%)`;
});

function toggleContentAndSVG(element) {
  var button = element;
  var dropdownmMenu = button.closest('.boder-bt--grey3').querySelector('.dropdown');
  dropdownmMenu.classList.toggle("show");
  button.classList.toggle("clicked");
}


window.addEventListener('DOMContentLoaded', (event) => {
  var firstButton = document.querySelector('.btn');
  toggleFAQChange(firstButton, 0);
});
function toggleFAQChange(button, faqNumber) {
  var faqChanges = document.getElementsByClassName("FAQ-change");
  for (var i = 0; i < faqChanges.length; i++) {
    if (faqChanges[i].getAttribute("data-faq") == faqNumber) {
      faqChanges[i].classList.add("slide-in");
      faqChanges[i].classList.remove("slide-out");
    } else {
      faqChanges[i].classList.remove("slide-in");
      faqChanges[i].classList.add("slide-out");
    }
  }

  var buttons = document.getElementsByClassName("btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-btn");
  }

  button.classList.add("active-btn");
}

var currentIndex = 0; // Biến lưu chỉ số hiện tại của ảnh

function showImage(index) {
  var largeImage = document.getElementById("large-image");
  var thumbnails = document.getElementsByClassName("thumbnail");

  // Remove active class from all thumbnails
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  // Add active class to the clicked thumbnail
  thumbnails[index].classList.add("active");

  // Update the large image source
  largeImage.src = thumbnails[index].src;

  currentIndex = index; // Cập nhật chỉ số hiện tại của ảnh
}

function nextImage() {
  var thumbnails = document.getElementsByClassName("thumbnail");

  // Tăng chỉ số hiện tại lên 1 (nếu không vượt quá số lượng ảnh)
  currentIndex = (currentIndex + 1) % thumbnails.length;

  // Hiển thị ảnh tiếp theo
  showImage(currentIndex);
}

function previousImage() {
  var thumbnails = document.getElementsByClassName("thumbnail");

  // Giảm chỉ số hiện tại xuống 1 (nếu không nhỏ hơn 0)
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;

  // Hiển thị ảnh trước đó
  showImage(currentIndex);
}


function decreaseQuantity(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click

  var quantityInput = document.querySelector(".quantity-input");
  var quantity = parseInt(quantityInput.value);

  if (quantity > 1) {
    quantityInput.value = quantity - 1;
  }
}

function increaseQuantity(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click

  var quantityInput = document.querySelector(".quantity-input");
  var quantity = parseInt(quantityInput.value);

  quantityInput.value = quantity + 1;
}

function playVideo() {
  var videoOverlay = document.getElementById('videoOverlay');
  var videoPlayer = document.getElementById('videoPlayer');
  
  videoOverlay.classList.remove('hide');
  videoPlayer.play();
}

function closeVideo() {
  var videoOverlay = document.getElementById('videoOverlay');
  var videoPlayer = document.getElementById('videoPlayer');
  
  videoOverlay.classList.add('hide');
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}
