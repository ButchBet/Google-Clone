import "../components/product.js"

// Script to set the corret of the height of the space in order to make the wiew of the page better

function setHeight() {
}

setInterval(() => {
    console.log("Resized")
    const bodyHeight = document.body.offsetHeight;
    const container = document.getElementById("container");
    const space = document.getElementById("space");
    const containerHeight = container.scrollHeight;
    
    var height = bodyHeight - containerHeight;    
    if(height > 0 || height < 0) {
        console.log(height);
        height += space.scrollHeight;

        const newHeight = `height: ${height}px`;

        console.log(newHeight);

        document.getElementById("space").setAttribute("style", newHeight);
    } else {
        console.log("The height is correct.")
    }
}, 500);

// window.addEventListener("resize", setHeight());