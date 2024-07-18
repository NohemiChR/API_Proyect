export function createSmallSlide(imageUrl, title,id) {
    const templateSlide = `
        <div class="swiper-slide">
            <div class="box">
             <img src=${imageUrl} alt=${title}>
            </div>
                <div class="content">
                    <h3>${title}</h3>
                    
                    <a href="#" class="btn" id="${id}">Download</a>
                </div>           
        </div>
    `;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = templateSlide.trim(); // .trim() elimina los espacios en blanco alrededor
    return tempDiv.firstChild;
}
