let currentImageIndex = 0;
const images = [
    'proje_fotografları/galeri2/1.webp',
    'proje_fotografları/galeri2/2.webp',
    'proje_fotografları/galeri2/3.webp',
    'proje_fotografları/galeri2/4.webp',
    'proje_fotografları/galeri2/5.webp',
    'proje_fotografları/galeri2/6.webp',
    'proje_fotografları/galeri2/7.webp'
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


