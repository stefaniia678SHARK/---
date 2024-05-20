document.addEventListener("DOMContentLoaded", function() {

let thumb = document.querySelectorAll('.thumb');
let wrapper = document.getElementById('wrapper');
let fullImgs = document.querySelectorAll('.fullImg');
let close = document.querySelector('span2');
let imgWrapper = document.getElementById('.fullImg');

thumb.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        openModal(fullImgs[index].src);
    });
});

close.addEventListener('click', () => (wrapper.style.display = "none"));

function openModal(pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic;
}
});
/*let images = document.querySelector('img')

let wrapper = document.getElementById('wrapper')

let imgWrapper = document.getElementById('fullImg');

let close = document.querySelector('span2');

// function () {}
// () => {}
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal('images/img${index}.jpg');
    });
});

close.addEventListener('click', () => (wrapper.style.display = "none"));

function openModal(pic) {
    wrapper.style.display = 'flex';
    imgWrapper.src = pic
}
*/

