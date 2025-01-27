let currentImageIndex = 0;
const images = [
    'proje_fotografları/galeri1/1.jpg',
    'proje_fotografları/galeri1/2.jpg',
    'proje_fotografları/galeri1/3.jpg',
    'proje_fotografları/galeri1/4.jpg',
    'proje_fotografları/galeri1/5.jpg',
    'proje_fotografları/galeri1/6.jpg',
    'proje_fotografları/galeri1/7.jpg',
    'proje_fotografları/galeri1/8.jpg',
    'proje_fotografları/galeri1/9.jpg',
    'proje_fotografları/galeri1/10.jpg',
    'proje_fotografları/galeri1/11.jpg',
    'proje_fotografları/galeri1/12.jpg',
    'proje_fotografları/galeri1/13.jpg',
    'proje_fotografları/galeri1/14.jpg',
    'proje_fotografları/galeri1/15.jpg',
    'proje_fotografları/galeri1/16.jpg',
    'proje_fotografları/galeri1/17.jpg',
    'proje_fotografları/galeri1/18.jpg',
    'proje_fotografları/galeri1/19.jpg',
    'proje_fotografları/galeri1/20.jpg',
    'proje_fotografları/galeri1/21.jpg',
    'proje_fotografları/galeri1/22.jpg',
    'proje_fotografları/galeri1/23.jpg',
    'proje_fotografları/galeri1/24.jpg',
    'proje_fotografları/galeri1/25.jpg',
    'proje_fotografları/galeri1/26.jpg',
    'proje_fotografları/galeri1/27.jpg',
    'proje_fotografları/galeri1/28.jpg',
    'proje_fotografları/galeri1/29.jpg',
    'proje_fotografları/galeri1/30.jpg',
    'proje_fotografları/galeri1/31.jpg',
    'proje_fotografları/galeri1/32.jpg',
    'proje_fotografları/galeri1/33.jpg',
    'proje_fotografları/galeri1/34.jpg',
    'proje_fotografları/galeri1/35.jpg',
    'proje_fotografları/galeri1/36.jpg',
    'proje_fotografları/galeri1/37.jpg',
    'proje_fotografları/galeri1/38.jpg',
    'proje_fotografları/galeri1/39.jpg',
    'proje_fotografları/galeri1/40.jpg'
];


function changeImage(direction) {
    currentImageIndex += direction;

    // Eğer sonuna gelindiyse başa dön
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById('photo').src = images[currentImageIndex];
}

// Mouse hover zoom etkisi
const photo = document.getElementById('photo');

photo.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = photo.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    photo.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});

photo.addEventListener('mouseleave', () => {
    photo.style.transformOrigin = 'center center';
});


