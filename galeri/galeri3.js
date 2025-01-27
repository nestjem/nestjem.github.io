let currentImageIndex = 0;
const images = [
    'proje_fotografları/galeri3/1.jpg',
    'proje_fotografları/galeri3/2.jpg',
    'proje_fotografları/galeri3/3.jpg',
    'proje_fotografları/galeri3/4.jpg',
    'proje_fotografları/galeri3/5.jpg',
    'proje_fotografları/galeri3/6.jpg',
    'proje_fotografları/galeri3/7.jpg',
    'proje_fotografları/galeri3/8.jpg',
    'proje_fotografları/galeri3/9.jpg',
    'proje_fotografları/galeri3/10.jpg',
    'proje_fotografları/galeri3/11.jpg',
    'proje_fotografları/galeri3/12.jpg',
    'proje_fotografları/galeri3/13.jpg',
    'proje_fotografları/galeri3/14.jpg',
    'proje_fotografları/galeri3/15.jpg',
    'proje_fotografları/galeri3/16.jpg',
    'proje_fotografları/galeri3/17.jpg',
    'proje_fotografları/galeri3/18.jpg',
    'proje_fotografları/galeri3/19.jpg',
    'proje_fotografları/galeri3/20.jpg',
    'proje_fotografları/galeri3/21.jpg',
    'proje_fotografları/galeri3/22.jpg',
    'proje_fotografları/galeri3/23.jpg',
    'proje_fotografları/galeri3/24.jpg',
    'proje_fotografları/galeri3/25.jpg',
    'proje_fotografları/galeri3/26.jpg',
    'proje_fotografları/galeri3/27.jpg'
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


