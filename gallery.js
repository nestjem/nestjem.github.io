let currentImageIndex = 0;
const images = [
    'images/icmimarlik/icmekanlar/1.jpg',
    'images/icmimarlik/icmekanlar/2.jpg',
    'images/icmimarlik/icmekanlar/3.jpg',
    'images/icmimarlik/icmekanlar/4.jpg',
    'images/icmimarlik/icmekanlar/5.jpg',
    'images/icmimarlik/icmekanlar/6.jpg',
    'images/icmimarlik/icmekanlar/7.jpg',
    'images/icmimarlik/icmekanlar/8.jpg',
    'images/icmimarlik/icmekanlar/9.jpg',
    'images/icmimarlik/icmekanlar/10.jpg',
    'images/icmimarlik/icmekanlar/11.jpg',
    'images/icmimarlik/icmekanlar/12.jpg',
    'images/icmimarlik/icmekanlar/13.jpg',
    'images/icmimarlik/icmekanlar/14.jpg',
    'images/icmimarlik/icmekanlar/15.jpg',
    'images/icmimarlik/icmekanlar/16.jpg',
    'images/icmimarlik/icmekanlar/17.jpg',
    'images/icmimarlik/icmekanlar/18.jpg',
    'images/icmimarlik/icmekanlar/19.jpg',
    'images/icmimarlik/icmekanlar/20.jpg',
    'images/icmimarlik/icmekanlar/21.jpg',
    'images/icmimarlik/icmekanlar/22.jpg',
    'images/icmimarlik/icmekanlar/23.jpg'
];

const mainImage = document.getElementById("mainImage");
const galleryContainer = document.querySelector(".gallery-container");
const header = document.querySelector('header'); // Header elementini seç
const navbar = document.querySelector('.navbar'); // Navbar elementini seç

let zoomedImage = null;
let clickCount = 0;  // Tıklama sayacını başlatıyoruz

function moveSlide(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;

    // Fotoğrafı güncelle
    mainImage.src = images[currentImageIndex];
}

// Fotoğrafın üzerine tıklanabilirlik
galleryContainer.addEventListener('click', function() {
    clickCount++;  // Tıklama sayısını bir arttırıyoruz

    if (clickCount === 2) {
        if (!zoomedImage) {
            // Zoomu başlat
            zoomedImage = document.createElement('div');
            zoomedImage.classList.add('zoomed-image');
            zoomedImage.style.backgroundImage = `url(${images[currentImageIndex]})`;  // Fotoğrafı yükle

            // Zoom için background-size ve background-position ayarla
            zoomedImage.style.backgroundSize = 'cover'; // Fotoğrafı kaplayacak şekilde büyüt
            zoomedImage.style.backgroundPosition = 'center'; // Fotoğrafı ortala

            // Ortalamak için absolute position
            zoomedImage.style.position = 'absolute';
            zoomedImage.style.top = '50%';
            zoomedImage.style.left = '50%';
            zoomedImage.style.transform = 'translate(-50%, -50%)'; // Tam olarak ortalama

            // Fotoğraf zoom alanını galeriye ekle
            galleryContainer.appendChild(zoomedImage);

            // Header ve navbar'ı gizle
            header.classList.add('hidden');
            navbar.classList.add('hidden');
        } else {
            // Zoomu kaldır
            galleryContainer.removeChild(zoomedImage);
            zoomedImage = null;

            // Header ve navbar'ı tekrar göster
            header.classList.remove('hidden');
            navbar.classList.remove('hidden');
        }

        // Tıklama sayacını sıfırla
        clickCount = 0;
    }

    // Tıklama sayacını resetlemek için 500 ms süre belirleyelim
    setTimeout(function() {
        clickCount = 0; // 500 ms'den sonra sayacı sıfırlıyoruz, çift tıklama olmasını engelliyor
    }, 500);
});

// Zoom işlevi
galleryContainer.addEventListener('mousemove', function(e) {
    if (zoomedImage) {
        const { offsetX, offsetY } = e;
        const { width, height } = galleryContainer.getBoundingClientRect();
        const percentX = (offsetX / width) * 100;
        const percentY = (offsetY / height) * 100;

        zoomedImage.style.backgroundPosition = `${percentX}% ${percentY}%`; // Fareyle bölgeyi ayarla
    }
});

galleryContainer.addEventListener('mouseleave', function() {
    if (zoomedImage) {
        galleryContainer.removeChild(zoomedImage); // Fare dışarı çıktığında zoom alanını kaldır
        zoomedImage = null;

        // Header ve navbar'ı tekrar göster
        header.classList.remove('hidden');
        navbar.classList.remove('hidden');
    }
});

let lastScrollTop = 0;
window.addEventListener("wheel", function (event) {
    let currentScroll = window.scrollY;

    if (event.deltaY > 0 && currentScroll > lastScrollTop) {
        // Aşağı kaydırıldığında gallery-grid'e git
        document.querySelector(".gallery-grid").scrollIntoView({
            behavior: "smooth",
            block: "start"  // Başlangıç noktasını belirler
        });
    } else if (event.deltaY < 0 && currentScroll < lastScrollTop) {
        // Yukarı kaydırıldığında header'a git
        document.querySelector(".header").scrollIntoView({
            behavior: "smooth",
            block: "start"  // Başlangıç noktasını belirler
        });
    }

    lastScrollTop = currentScroll;
});
