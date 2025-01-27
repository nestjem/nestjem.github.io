// Slideshow animasyonlarını başlatan fonksiyon
function startSlideshow() {
    const slides = document.querySelectorAll('.slideshow .slide');
    const slideshow = document.querySelector('.slideshow');
    let index = 0;
    let transitionTime = 5000; // Hızlı geçiş için süreyi sabit tutuyoruz
    let slideshowInterval;
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.querySelector(".nav-links");

    // Menü ikonuna tıklama olayı
    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Başlangıçta tüm slaytları gizle
    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.left = '100%';
    });

    slides[index].style.left = '0%';
    slides[index].style.opacity = 1;

    // Slayt geçişini güncelleyen fonksiyon
    function updateSlide() {
        slides[index].style.left = '100%';
        slides[index].style.opacity = 0;

        index = (index + 1) % slides.length;

        slides[index].style.left = '0%';
        slides[index].style.opacity = 1;
    }

    // Slayt geçişi başlat
    slideshowInterval = setInterval(updateSlide, transitionTime);

    // Slaytın üzerine gelindiğinde animasyonu durdur
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval); // Animasyonu durdur
        });

        slide.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(updateSlide, transitionTime); // Animasyonu yeniden başlat
        });
    });

    // Slayt üzerine tıklandığında geçişi sağla
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            clearInterval(slideshowInterval); // Animasyonu durdur
            updateSlide(); // Fotoğrafı değiştir
            slideshowInterval = setInterval(updateSlide, transitionTime); // Animasyonu yeniden başlat
        });
    });

    // NextImage fonksiyonu (OK tuşu ile slayt değiştirme)
    function nextImage() {
        clearInterval(slideshowInterval); // Animasyonu durdur
        updateSlide(); // Bir sonraki fotoğrafı göster
        slideshowInterval = setInterval(updateSlide, transitionTime); // Animasyonu yeniden başlat
    }

    // PreviousImage fonksiyonu (ÖNCEKİ ok tuşu ile slayt değiştirme)
    function previousImage() {
        clearInterval(slideshowInterval); // Animasyonu durdur

        index = (index - 1 + slides.length) % slides.length; // Önceki slayta geçiş

        // Yeni slaytı hızlıca ortada göstermek
        slides[index].style.left = '0%';
        slides[index].style.opacity = 1;

        // Diğer slaytları gizle
        slides.forEach((slide, i) => {
            if (i !== index) {
                slide.style.left = '100%';
                slide.style.opacity = 0;
            }
        });

        slideshowInterval = setInterval(updateSlide, transitionTime); // Animasyonu yeniden başlat
    }

    // Next button'a tıklama olayı
    const nextButton = document.getElementById("nextArrow");
    if (nextButton) {
        nextButton.addEventListener('click', nextImage);
    }

    // Previous button'a tıklama olayı
    const prevButton = document.getElementById("prevArrow");
    if (prevButton) {
        prevButton.addEventListener('click', previousImage);
    }

    // Fare slayt üzerine geldiğinde cursor'u 'grab' olarak değiştirme
    slideshow.addEventListener('mouseenter', () => {
        slideshow.style.cursor = 'grab'; // Kaydırma işlemi için uygun fare işareti
    });

    // Fare slayttan ayrıldığında cursor'u 'default' olarak geri getirme
    slideshow.addEventListener('mouseleave', () => {
        slideshow.style.cursor = 'default'; // Fare işaretini normal hale getir
    });
}

// Logo animasyonlarını başlatan fonksiyon
function startLogoAnimation() {
    const logoItems = document.querySelectorAll('.logos .logo-item');

    setTimeout(() => {
        logoItems.forEach(logo => {
            logo.classList.add('visible');
        });
    }, 500);
}

// Navbar küçültme efekti
function shrinkNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px';
        } else {
            navbar.style.padding = '20px';
        }
    });
}

// Sayfa yüklendiğinde tüm fonksiyonları başlat
window.onload = () => {
    window.scrollTo(0, 0);
    startSlideshow();
    startLogoAnimation();
    shrinkNavbarOnScroll();
};

let lastScrollTop = 0;
window.addEventListener("wheel", function (event) {
    let currentScroll = window.scrollY;

    if (event.deltaY > 0 && currentScroll > lastScrollTop) {
        // Aşağı kaydırıldığında slideshow'a git
        document.querySelector(".slideshow").scrollIntoView({
            behavior: "smooth"
        });
    } else if (event.deltaY < 0 && currentScroll < lastScrollTop) {
        // Yukarı kaydırıldığında header'a git
        document.querySelector(".header").scrollIntoView({
            behavior: "smooth"
        });
    }

    lastScrollTop = currentScroll;
});
