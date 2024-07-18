


document.addEventListener('DOMContentLoaded', async () => {
    const animeId = localStorage.getItem('animeId');
    if (!animeId) {
        console.error('No anime ID found in localStorage');
        return;
    }

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
        const data = await response.json();
        
        if (data.data) {
            const anime = data.data;
            console.log(anime);

            // Actualiza el título y la descripción
            document.querySelector('.about h2').textContent = `ABOUT ${anime.title.toUpperCase()}`;
            document.querySelector('.about p').textContent = anime.synopsis || "No synopsis available.";

            // Actualiza el iframe con el URL del video
            const trailerUrl = anime.trailer.embed_url;
            if (trailerUrl) {
                document.querySelector('.video-container iframe').src = trailerUrl;
            }else if(trailerUrl===null){
                document.querySelector('.video-container iframe').src ='https://www.youtube.com/embed/zBEotIMuWuc';

            }

            // Actualiza las capturas de pantalla (screenshots)
            const screenshotsContainer = document.querySelector('.screenshots-content');
            screenshotsContainer.innerHTML = ''; // Limpia las capturas de pantalla existentes
            anime.images.jpg.large_image_url.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = `${anime.title} screenshot`;
                img.loading = 'lazy';
                screenshotsContainer.appendChild(img);
            });
        } else {
            console.error('No anime data found for the provided ID');
        }
    } catch (error) {
        console.error('Error fetching anime details:', error);
    }
});