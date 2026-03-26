(function (){
    const nextBtn = document.querySelector(".nextBtn");
    const previousBtn = document.querySelector(".previousBtn");
    const imageSet = document.querySelector(".imageSet");
    const images = document.querySelectorAll(".bannerImages");
    let imageIndex = 0;

    images[imageIndex].classList.add('show');

    nextBtn.addEventListener('click', slideNext);
    previousBtn.addEventListener('click', slidePrevious);

    function slideNext() {
        images[imageIndex].classList.remove('show');
        imageIndex = (imageIndex === images.length - 3) ? 0 : imageIndex + 1; // I want to hide the first 2 img
        images[imageIndex].classList.add('show');

        imageSet.style.transform = `translateX(-${imageIndex * 100}%)`;
    }

    function slidePrevious() {
        images[imageIndex].classList.remove('show');
        imageIndex = (imageIndex === 0) ? images.length - 3 : imageIndex - 1; // I want to hide the first 2 img
        images[imageIndex].classList.add('show');

        imageSet.style.transform = `translateX(-${imageIndex * 100}%)`;
    }
    // adding auto sliding functionality
    setInterval(slideNext, 3000);
})();