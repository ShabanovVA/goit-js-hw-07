import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
 
const imageItem = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href='${original}'>
    <img class='gallery__image'
    src='${preview}'
    data-source='${original}'
    alt='${description}'
    />
    </a>`
}).join("");

galleryList.insertAdjacentHTML("beforeend", imageItem);


const onClickChangeSizeImage = event => {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`)
    instance.show()

    galleryList.addEventListener('keydown', onCloseModal);

    function onCloseModal(event) {
    if (event.code === "Escape") {
    instance.close()
        galleryList.removeEventListener('keydown', onCloseModal);
    }
    };
}
galleryList.addEventListener('click', onClickChangeSizeImage);