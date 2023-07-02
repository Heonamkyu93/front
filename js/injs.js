window.addEventListener('scroll', function () {






    let header = document.querySelector('header');
    if (window.scrollY > window.innerHeight * 0.1) {

        header.style.backgroundColor = 'white';

    } else {
        header.style.backgroundColor = '';
    }
});



const images = document.querySelectorAll('.img1, .img2, .img3, .img4, .img5, .img6');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        lightboxImage.setAttribute('src', src);
        lightbox.style.display = 'block';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
const bgVideo = document.getElementById('bg-video');

bgVideo.addEventListener('click', () => {
    if (bgVideo.paused) {
        bgVideo.play();
    } else {
        bgVideo.pause();
    }
});