let currentImageIndex = 0;
const images = [
    'proje_fotografları/galeri5/1.jpg',
    'proje_fotografları/galeri5/2.jpg',
    'proje_fotografları/galeri5/3.jpg',
    'proje_fotografları/galeri5/4.jpg',
    'proje_fotografları/galeri5/5.jpg',
    'proje_fotografları/galeri5/6.jpg',
    'proje_fotografları/galeri5/7.jpg',
    'proje_fotografları/galeri5/8.jpg',
    'proje_fotografları/galeri5/9.jpg',
    'proje_fotografları/galeri5/10.jpg',
    'proje_fotografları/galeri5/11.jpg',
    'proje_fotografları/galeri5/12.jpg',
    'proje_fotografları/galeri5/13.jpg',
    'proje_fotografları/galeri5/14.jpg',
    'proje_fotografları/galeri5/15.jpg',
    'proje_fotografları/galeri5/16.jpg',
    'proje_fotografları/galeri5/17.jpg',
    'proje_fotografları/galeri5/18.jpg',
    'proje_fotografları/galeri5/19.jpg'
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


