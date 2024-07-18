import './menu.js';
import './sliders.js';
import { createSlide } from './components/silde.js';
import apiFetch from '../services/apifetch.js';


async function loadSlides(endpoint, containerClass) {
    try {
        const data = await apiFetch(endpoint); // Usa el endpoint proporcionado como argumento
        
        const container = document.querySelector(containerClass); // Usa la clase del querySelector proporcionada como argumento
        
        if (!container) {
            console.error(`No container found for class: ${containerClass}`);
            return;
        }

        data.data.forEach(item => {
            console.log(item);
            console.log()
            const  imageUrl =item.trailer.images.maximum_image_url; // Asegúrate de que las propiedades coincidan con la estructura de tus datos
            console.log(imageUrl);
            const title =item.title;
            const description = item.synopsis;
            const newSlide = createSlide(imageUrl, title, description);
            container.appendChild(newSlide);
        });
    } catch (error) {
        console.error('Error loading slides:', error);
    }
}

// Ejemplo de uso
document.addEventListener("DOMContentLoaded", () => {
loadSlides('top/anime', '.swiper-wrapper'); 
})