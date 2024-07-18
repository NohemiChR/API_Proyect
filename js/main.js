import './menu.js';
import './sliders.js';
import { createSlideHome } from './components/home-silde.js';
import { createSmallSlide } from './components/small-slide.js';
import apiFetch from '../services/apifetch.js';


async function loadSlides(endpoint, containerId) {
    console.log("incio");
    try {
        const data = await apiFetch(endpoint); // Usa el endpoint proporcionado como argumento
        
        const container = document.querySelector(containerId); // Usa la clase del querySelector proporcionada como argumento
        
        if (!container) {
            console.error(`No container found for class: ${containerId}`);
            return;
        }

        data.data.forEach(item => {
            const title =item.title;
            const description = item.background;
            const id = item.mal_id; // Obtener el ID del anime
            console.log("este es el id",id)
            
            let newSlide;
            let imageUrl;
               if(containerId=="#home-swiper"){
                  imageUrl=item.trailer.images.maximum_image_url;
                  newSlide = createSlideHome(imageUrl, title, description,id);
               }else{
                  console.log(item.title);
                  imageUrl =item.images.jpg.large_image_url;
                  newSlide = createSmallSlide(imageUrl, title,id);
               }
               container.appendChild(newSlide);
            
        });
    } catch (error) {
        console.error('Error loading slides:', error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
loadSlides('top/anime', '#home-swiper'); 
// loadSlides('seasons/now', '#season-swiper'); 
 loadSlides('top/anime', '#sport-swiper'); 
loadSlides('anime?genres=4', '#comedy-swiper');
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        const id = event.target.getAttribute('id');
        if (id) {
            localStorage.setItem('animeId', id);
            window.location.href = 'download.html';
        }
    }
});

})