export function createSmallSlide(imageUrl, title, id) {
    const templateSlide = `
        <div class="swiper-slide">
            <div class="box">
                <img src="${imageUrl}" alt="${title}">
            </div>
            <div class="content">
                <h3>${title}</h3>
                <a href="#" class="btn" id="details-${id}">Ver ahora</a>
            </div>
        </div>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = templateSlide.trim();
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
