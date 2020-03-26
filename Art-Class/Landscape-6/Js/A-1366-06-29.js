const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
const arrowBox = document.querySelector('.image_arrow');
const image = document.querySelector('.view');

let page;

document.body.onload = () => {
    page = parseInt(arrowBox.dataset.page);
    switch (page) {
        case 29:
            leftArrow.style.display = 'none';
            break;
        case 32:
            rightArrow.style.display = 'none';
            break;
    }
    leftArrow.addEventListener('click', ()=>{
        page = parseInt(arrowBox.dataset.page);
        switch (page) {
            case 30:
                arrowBox.dataset.page = '29';
                leftArrow.style.display = 'none';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_29.svg";
                break;
            case 31:
                arrowBox.dataset.page = '30';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_30.svg";
                break;
            case 32:
                arrowBox.dataset.page = '31';
                rightArrow.style.display = 'block';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_31.svg";
        }
    });

    rightArrow.addEventListener('click', ()=>{
        page = parseInt(arrowBox.dataset.page);
        switch (page) {
            case 29:
                arrowBox.dataset.page = '30';
                leftArrow.style.display = 'block';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_30.svg";
                break;
            case 30:
                console.log('fire')
                arrowBox.dataset.page = '31';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_31.svg";
                break;
            case 31:
                console.log('fire')
                arrowBox.dataset.page = '32';
                rightArrow.style.display = 'none';
                image.src = "../../img/gakvetilebi/xelovneba/Landscape/art_06_32.svg";
                break;
        }
    });
};