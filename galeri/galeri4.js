let currentImageIndex = 0;
const images = [
    'proje_fotografları/galeri4/1.jpg',
    'proje_fotografları/galeri4/2.jpg',
    'proje_fotografları/galeri4/3.jpg',
    'proje_fotografları/galeri4/4.jpg',
    'proje_fotografları/galeri4/5.jpg',
    'proje_fotografları/galeri4/6.jpg',
    'proje_fotografları/galeri4/7.jpg',
    'proje_fotografları/galeri4/8.jpg',
    'proje_fotografları/galeri4/9.jpg',
    'proje_fotografları/galeri4/10.jpg',
    'proje_fotografları/galeri4/11.jpg',
    'proje_fotografları/galeri4/12.jpg',
    'proje_fotografları/galeri4/13.jpg',
    'proje_fotografları/galeri4/14.jpg',
    'proje_fotografları/galeri4/15.jpg',
    'proje_fotografları/galeri4/16.jpg',
    'proje_fotografları/galeri4/17.jpg',
    'proje_fotografları/galeri4/18.jpg',
    'proje_fotografları/galeri4/19.jpg',
    'proje_fotografları/galeri4/20.jpg',
    'proje_fotografları/galeri4/21.jpg',
    'proje_fotografları/galeri4/22.jpg',
    'proje_fotografları/galeri4/23.jpg',
    'proje_fotografları/galeri4/24.jpg',
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


