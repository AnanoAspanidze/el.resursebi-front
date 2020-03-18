function computerGames(){
    var DragGameChilds1 = document.querySelectorAll('.DragGame--childs1');
    var mydrag = document.querySelectorAll('.myDrag');

    var parent1 = document.querySelector('.parent1');
    var parent2 = document.querySelector('.parent2');
    var parent3 = document.querySelector('.parent3');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');

    $(DragGameChilds1).on('dragstart', (e) => this.dragStart(e));
    $(DragGameChilds1).on('dragend', (e) => this.dragEnd(e));


    for(const drag of mydrag){
        drag.addEventListener('dragover', (e) => this.dragOver(e));
        drag.addEventListener('drop', (e) => this.dragDrop(e));
    }

    document.addEventListener('DOMContentLoaded', () => {
        mydrag.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        })
        DragGameChilds1.forEach(w => {
            w.setAttribute('data-class', w.getAttribute('class'))
        });
    })


    this.dragOver = (e) => {
        
        e.preventDefault();
    }
    this.dragStart = (e) => {
        setTimeout(() => {
            e.target.className += " draggedElement"
        }, 0);
    }

    this.dragEnd = (e) => {
        var elClassName = e.target.getAttribute('data-class')
        e.target.className = elClassName;
    }

    var myArray = [];
    DragGameChilds1.forEach(element => {
        myArray.push(element);
    });

    this.dragDrop = (e) =>{
        var drag = document.querySelector('.draggedElement')
        if(e.target.classList.contains('myDrag')){
            e.target.appendChild(drag);
        }
    }

    this.checkEveryElement = (element) => element.getAttribute('data-place') == element.parentElement.getAttribute('data-place');

    this.successPage = () => {
        let el = myArray.every(this.checkEveryElement);
        if(el){
            if (window.location.href.includes("12.html")) {
                location.href = 'game-success-12.html';
            }
            if (window.location.href.includes("13.html")) {
                location.href = 'game-success-13.html';
            }
            if (window.location.href.includes("14.html")) {
                location.href = 'game-success-14.html';
            }
        }
        else{
            this.errorPage();
        }
    }


    this.errorPage = () => {
        myArray.forEach(element => {
            if (element.getAttribute('data-place') == element.parentElement.getAttribute('data-place')) {
                $(element).addClass("success");
            }
            else {
                $(element).addClass("error");
            }
        });
    }

    this.completGame = () => {
        this.successPage();
        completedBtn.setAttribute('disabled', 'true');
    }

    this.init = () => {
        myArray.forEach(element => {
            $(element).removeClass("error");
            $(element).removeClass("success");
        });
        myArray.forEach(element => {
          if(element.getAttribute("data-end") == "1"){
              parent1.appendChild(element)
          }
          if(element.getAttribute("data-end") == "2"){
              parent2.appendChild(element)
          }
          if(element.getAttribute("data-end") == "3"){
              parent3.appendChild(element)
          }
        });
        completedBtn.removeAttribute('disabled');

    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());


}



const computergame = new computerGames();