// libra svg selectors
const libra = $('#libra_line');
const libraLeft = $('#left_side');
const libraRight = $('#right_side');
const leftLibraBox = $('.droppable_bg');
const rightLibraBox = $('.droppable_sm');

// svg image g tags
const libraLeftBox = document.getElementById('left_side');
const libraRightBox = document.getElementById('right_side');

// svg paths
const leftPaths = libraLeftBox.querySelectorAll('g path');
const rightPaths = libraRightBox.querySelectorAll('g path');

//sm image boxes
const circle = document.querySelectorAll('.sm_circle');
const square = document.querySelectorAll('.sm_square');
const triangle = document.querySelectorAll('.sm_triangle');

//finish reset selectors
const resetBtn = document.getElementById('resetBtn');
const completeGame = document.getElementById('completedGame');

//data saving
let prevDom = [];
let prevItem = '';

//reset || finish function
resetBtn.addEventListener('click', init);
completeGame.addEventListener('click', gameOver);

//onload fn.
$(document).ready(function () {
    initPosition();

    $(".bg").draggable({
        revert: "invalid",
        //clear transition if exist
        drag: function (event, ui) {
            ui.helper.css({
                transition: ''
            })
        }
    });

    $(".sm").draggable({
        revert: "invalid",
        //clear transition if exist
        drag: function (event, ui) {
            ui.helper.css({
                transition: ''
            })
        }
    });


    $(".droppable_bg").droppable({
        // center dropped image
        drop: function (event, ui) {
            // check if ui is big image if not reset
            if (ui.draggable.hasClass('bg')) {
                prevDom.push(ui.draggable.parent());
                //switch pace forms
                if (prevDom.length > 0 && prevDom[prevDom.length - 2] !== undefined) {
                    prevDom[prevDom.length - 2].append($(this).children())
                    clearItems(prevItem)
                }
                $(this).append(ui.draggable);
                clearCss(ui);
            } else {
                ui.draggable.css({
                    left: 0,
                    top: 0,
                    transition: '0.5s ease'
                })
            }
        }
    });
    // sm figure drop
    $(".droppable_sm").droppable({
        drop: function (event, ui) {
            //check if the figure is small
            if (ui.draggable.hasClass('sm')) {
                detectItem(ui);
                console.log(leftLibraBox.children().data('index'))
                //check if the figure type(square, triangle, circle) if not match reset position
                if ((leftLibraBox.children().data('index') === 'triangle' || leftLibraBox.children().data('index') === undefined) && ui.draggable.hasClass('sm_triangle') ) {
                    $(this).append(ui.draggable);
                    clearCss(ui);
                } else if ((leftLibraBox.children().data('index') === 'square' || leftLibraBox.children().data('index') === undefined) && ui.draggable.hasClass('sm_square')) {
                    $(this).append(ui.draggable);
                    clearCss(ui);
                } else if ((leftLibraBox.children().data('index') === 'circle' || leftLibraBox.children().data('index') === undefined) && ui.draggable.hasClass('sm_circle')) {
                    $(this).append(ui.draggable);
                    clearCss(ui);
                } else {
                    ui.draggable.css({
                        left: 0,
                        top: 0,
                        transition: '0.5s ease'
                    })
                }
            } else {
                ui.draggable.css({
                    left: 0,
                    top: 0,
                    transition: '0.5s ease'
                })
            }
        }
    });
});

// clear items init
function init() {
    initPosition();
    clearItems(prevItem);
    if (prevDom.length !== 0) {
        prevDom[prevDom.length - 1].append($('.droppable_bg').children());
    }
    for (let i = 0; i < leftPaths.length; i++) {
        leftPaths[i].style.fill = '#b3b3b3';
        rightPaths[i].style.fill = '#b3b3b3';
    }
    // clear save data
    completeGame.removeAttribute('disabled');
    prevDom =[];
    prevItem = '';
}

function gameOver() {
    const leftBox = document.querySelector('.droppable_bg img');
    const rightBox = document.querySelectorAll('.droppable_sm img');
    if (leftBox !== null || rightBox.length !== 0) {
        if (rightBox.length === 3 && !rightBox[0].classList.contains('sm_square')) {
            window.location.href = './game-success-9.html'
        } else if (rightBox.length === 4 && rightBox[0].classList.contains('sm_square')) {
            window.location.href = './game-success-9.html'
        } else {
            if (leftBox) {
                rightPaths.forEach(elm => {
                    elm.style.fill = 'red';
                })
                originalPosition();
            } else {
                leftPaths.forEach(elm => {
                    elm.style.fill = 'red'
                });
                rightHeightPosition()
            }

        }
    } else {
        redSides()
    }
    completeGame.setAttribute('disabled', 'true')
}

// clear draggable positions
function clearCss(ui) {
    ui.draggable.css({
        left: '',
        top: ''
    });
}

// clear right box items
function clearItems(box) {
    const images = $('.right_side-box').find('img');
    for (let i = 0; i < images.length; i++) {
        //generate selector
        $(`.${box}_forms`).append(images[i])
    }
}

// right dropped item type
function detectItem(ui) {
    if (ui.draggable.hasClass('sm_circle')) {
        prevItem = 'circle';
    } else if (ui.draggable.hasClass('sm_triangle')) {
        prevItem = 'triangle';
    } else if (ui.draggable.hasClass('sm_square')) {
        prevItem = 'square';
    }
}

// initial position of libra.
function initPosition() {
    libra.css({
        transform: 'translate(392.943px, 391.46px) rotate(16deg)',
        transition: 'all 0.5s ease'
    });
    libraLeft.css({
        transform: 'translate(323px, 472.116px)',
        transition: 'all 0.5s ease'
    });
    libraRight.css({
        transform: 'translate(576.108px, 472.077px)',
        transition: 'all 0.5s ease'
    });
    leftLibraBox.css({
        bottom: '72px',
        transition: 'all 0.5s ease'
    });
    rightLibraBox.css({
        bottom: '72px',
        transition: 'all 0.5s ease'
    });
}

function originalPosition() {
    libra.css({
        transform: '',
        transition: 'all 0.5s ease'
    });
    libraLeft.css({
        transform: '',
        transition: 'all 0.5s ease'
    });
    libraRight.css({
        transform: '',
        transition: 'all 0.5s ease'
    });
    leftLibraBox.css({
        bottom: '47px',
        transition: 'all 0.5s ease'
    });
    rightLibraBox.css({
        bottom: '117px',
        transition: 'all 0.5s ease'
    });
}

function rightHeightPosition() {
    libra.css({
        transform: 'translate(415.943px, 366.46px) rotate(31deg)',
        transition: 'all 0.5s ease'
    });
    libraLeft.css({
        transform: 'translate(323px, 441.116px)',
        transition: 'all 0.5s ease'
    });
    libraRight.css({
        transform: 'translate(576.108px, 505.077px)',
        transition: 'all 0.5s ease'
    })
    leftLibraBox.css({
        bottom: '104px',
        transition: 'all 0.5s ease'
    });
    rightLibraBox.css({
        bottom: '39px',
        transition: 'all 0.5s ease'
    });
}

function redSides() {
    for (let i = 0; i < leftPaths.length; i++) {
        leftPaths[i].style.fill = 'red';
        rightPaths[i].style.fill = 'red';
    }
}



