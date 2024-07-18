export function createSlideHome(imageUrl, title, description,id) {
    const templateSlide = `
        <div class="swiper-slide">
            <div class="box" style="background: url(${imageUrl}) no-repeat;">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <a href="#" class="btn" id="details-${id}">Ver ahora</a>
                </div>
            </div>
        </div>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = templateSlide.trim(); // .trim() elimina los espacios en blanco alrededor
    const slideElement = tempDiv.firstChild;

    const detailsButton = slideElement.querySelector(`#details-${id}`);
    detailsButton.addEventListener('click', (event) => {
        event.preventDefault();
        // Aquí puedes manejar el ID como desees, por ejemplo redirigir a otra página
        console.log('Button clicked, ID:', id);
        window.location.href = `views/details.html?id=${id}`;
    });

    return slideElement;
}
