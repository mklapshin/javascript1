function openImage(event) {
    console.log(event);

    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];

    /* очищаем галерею */
    gallery.innerHTML = "";

    /* получаем пораждающий событие объект */
	const target = event.target;

    /* получаем data-атрибут с номером картинки */
	const seed = target.dataset.seed;

    /* если номер пустой, то прерываем выполнение */
	if (!seed) {
	    return;
    }

    /* создаем картинку */
	const image = document.createElement("img");

    /* добавляем атрибуты к картинке */
    image.id  = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/800`;
    image.alt = `Изображение ${seed}`

    /* добавляем новый блок в галерею */
    gallery.appendChild(image);
}

function init() {
    const images = document.querySelectorAll(".thumbnails > img");

    for (let image of images) {
        image.addEventListener('click', openImage);
    }
}

window.addEventListener('load', init);