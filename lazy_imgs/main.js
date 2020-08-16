
// let options = {
//     threshold: 1 //Indicates how far image should be relative to bottom of page before it loads. with value=1 means loaded image should be fully on screen/in view before next image is loaded

// }

const observer = new IntersectionObserver(imageObserver, {threshold: 0.5});

function replaceOriginalImage(entry, observer) {
    // if entry is intersecting/visible enough
    if(entry.isIntersecting) {

        // first retrieve the image tag/DOM
        console.log("Entry: ", entry);
        let img = entry.target;
        console.log("Image: ", img);
        // retrieve the replacement/actual image
        // and replace the placeholder image with replacement/actual image
        img.src = img.dataset.src;
        observer.unobserve(img);
    }

}

function imageObserver(entries, observer) {
    //entries are all of the observed items

    for(let i = 0; i < entries.length; i++) {
        replaceOriginalImage(entries[i], observer);
    }
}

//Access all images
let imgs = document.querySelectorAll('img.lazy');
imgs.forEach(img => {
    observer.observe(img);
})