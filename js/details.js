import apiFetch from "../services/apifetch.js";

const urlParams = new URLSearchParams(window.location.search);
        const animeId = urlParams.get('id');

        // Verificar si se obtuvo el ID
        if (animeId) {
           console.log(animeId);
        } else {
            console.error('No anime ID found in the URL');
        }