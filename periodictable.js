
const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  
    const gridColumn = parseInt(window.getComputedStyle(element).gridColumnStart, 10);
    const gridRow = parseInt(window.getComputedStyle(element).gridRowStart, 10);

    // Check if the element is a transition element
    if (gridColumn >= 3 && gridColumn <= 12 && gridRow >= 4 && gridRow <= 7) {
        element.style.borderColor = 'red';
        element.style.color = 'red';
    }
    else if(gridColumn===1 ){
        element.style.borderColor = 'orange';
        element.style.color = 'orange';
    }
    else if(gridColumn===2 ){
        element.style.borderColor = 'yellow';
        element.style.color = 'yellow';
    }
    
});
