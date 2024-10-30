import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    spacing: 0.2,
    wheelToZoom: true,
    preloaderDelay: 500
});
lightbox.init();