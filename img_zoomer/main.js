const image = document.querySelector('.image');

image.addEventListener('mousemove', function(e) {
    let width = image.offsetWidth;
    let height = image.offsetHeight;

    //Getting x and y positions when hovered over the image
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    //Calculating position of background in percentage
    let bgPosX = (mouseX / width * 100);
    let bgPosY = (mouseY / height * 100);

    image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});

//Return background position to center when mouse is removed from image
image.addEventListener('mouseleave', function(){
    image.style.backgroundPosition = "center";
});