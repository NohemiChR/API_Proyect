export function createSlideHome(imageUrl, title, description,id) {
    const templateSlide = `
        <div class="swiper-slide">
            <div class="box" style="background: url(${imageUrl}) no-repeat;">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <a href="#" class="btn" id="${id}">Download</a>
                </div>
            </div>
        </div>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = templateSlide.trim(); // .trim() elimina los espacios en blanco alrededor
    return tempDiv.firstChild;
}
