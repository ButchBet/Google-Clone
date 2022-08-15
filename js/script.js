import "../components/product.js"

// Script to set the corret of the height of the space in order to make the wiew of the page better
setInterval(() => {
    const bodyHeight = document.body.offsetHeight;
    const container = document.getElementById("container");
    const space = document.getElementById("space");
    const containerHeight = container.scrollHeight;
    
    var height = bodyHeight - containerHeight;    
    if(height > 0 || height < 0) {
        height += space.scrollHeight;

        const newHeight = `height: ${height}px`;

        document.getElementById("space").setAttribute("style", newHeight);
    } 
}, 500);
