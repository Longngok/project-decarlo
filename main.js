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


  