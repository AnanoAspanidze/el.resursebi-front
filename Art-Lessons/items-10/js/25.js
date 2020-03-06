function artGame(){
    var checkmark = document.querySelectorAll('.checkmark');

    var completedBtn = document.getElementById('completedGame');
    var resetBtn = document.getElementById('resetBtn');
    $(checkmark).on('click', (e) => this.clickMe(e));
    

    this.clickMe = (e) => {
        e.target.parentElement.classList.add('active');
    }

    this.completGame = () => {
        var count = 0;
        // /console.log('complate')
        checkmark.forEach(element => {
            //console.log(element.parentElement.classList.contains('active'))
            if(element.parentElement.classList.contains('active')){
                console.log('active', element.classList.contains('correct'))
                if(element.classList.contains('correct')){
                    //console.log('complate');
                    count++;
                }
            }
            if((element.parentElement.classList.contains('active'))){
                if((element.classList.contains('noCorrect'))){
                    //console.log(element.parentElement)
                    count = 0;
                    element.parentElement.classList.add('error');
                }
            }
        });
        

        if (count == 4) {
            this.successPage();
        }


        completedBtn.setAttribute('disabled', 'true');
    }



    this.init = (e) =>{
        checkmark.forEach(element => {
            $(element.parentElement).removeClass( "error")
            $(element.parentElement).removeClass( "active")
        });
        completedBtn.removeAttribute('disabled');
    }

    this.successPage = () => {
        location.href = 'game-success-26.html';
    }


    resetBtn.addEventListener('click', () => this.init());
    completedBtn.addEventListener('click', () => this.completGame());
}

const artgame = new artGame();