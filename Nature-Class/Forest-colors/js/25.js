// შესამოწმებელი მასივები
const green = ['nadzvi', 'fichvi'];
const yellow = ['muxa', 'tela', 'kedari', 'txili', 'kuneli', 'shqeri', 'cxratyava'];

$(function () {
   //ელემ. გადაადგილება
   $(".tree").draggable({
      revert: "invalid",
      helper: "clone",
      containment: "document"
   });
   //ელემ. ჩაგდება
   $(".image-box_game").droppable({
      classes: {
         "ui-droppable-active": "ui-state-active",
         "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
         ui.draggable.appendTo($(this));
      },
   });
});

$(".image-box_game img").draggable('disable');
$('#reset').click(reset);

const greenBox = document.querySelector('.green_box').childNodes;
const yellowBox = document.querySelector('.yellow_box').childNodes;

const check = document.getElementById('check');
let greenTrees = [];
let yellowTree = [];


// მცენარეების შემოწმება და მასივში გადაწერა
check.addEventListener('click', () => {
   greenBox.forEach(evt => {
      greenTrees.push($(evt).attr('alt'))
   });
   yellowBox.forEach(evt => {
      yellowTree.push($(evt).attr('alt'))
   });

   // მასივების გაფილტვრა
   greenTrees.filter((el, i, arr1) => {
      el === (undefined && null) ? arr1.shift() : arr1
   });

   yellowTree.map((el, i, arr) => {
      el === (undefined && null) ? arr.shift() : arr
   });


   for (let i = 0; i < green.length; i++) {
      for (let j = 0; j < yellow.length; j++) {
         // თუ ყველა პირობა სწორია ჩაიტვირთოს ახალი გვერდი
         if (greenTrees[i] === green[i] && yellowTree[j] === yellow[j] && greenTrees.length === 2 && yellowTree.length ===7){
            debugger 
            window.location.href = './success-25.html';
         }else{
            // თუ მარადმწვანე ჯგუფი არაა სწორად შევსებული ან ცარიელია
            if (greenTrees[i] !== green[i] && greenTrees.length !== 2){
               $('.green_box').addClass('animated bounce');
               $('.green_box').css('background', '#ff3a24');
               $('#check').addClass('disabled');
            }else if(greenTrees[i] === green[i]){ // თუ მარადმწვანე ჯგუფი სწორადაა შევსებული სტილების მოხსნა
               $('.green_box').removeClass('animated bounce danger');
               $('.green_box').css('background', '');
            }
            // თუ არამარადმწვანე ჯგუფი არაა სწორად შევსებული ან ცარიელია
            if(yellowTree[j] !== yellow[j] && yellowTree.length !== 7){
               $('.yellow_box').addClass('animated bounce danger');
               $('.yellow_box').css('background', '#ff3a24');
               $('#check').addClass('disabled');
            }else if(yellowTree[j] !== yellow[j]){  // თუ არამარადმწვანე ჯგუფი სწორადაა შევსებული სტილების მოხსნა
               $('.yellow_box').removeClass('animated bounce danger');
               $('.yellow_box').css('background', '');
            }
         }
      }
   }
   console.log(greenTrees)
   // მასივების გაწმენდა
   yellowTree = [];
   greenTrees = [];
});

// თამაშის განულება ახლიდან დასაწყებად
function reset() {
   $('#kedari').append($('img[alt="kedari"]'));
   $('#tela').append($('img[alt="tela"]'));
   $('#muxa').append($('img[alt="muxa"]'));
   $('#nadzvi').append($('img[alt="nadzvi"]'));
   $('#fichvi').append($('img[alt="fichvi"]'));
   $('#txili').append($('img[alt="txili"]'));
   $('#kuneli').append($('img[alt="kuneli"]'));
   $('#shqeri').append($('img[alt="shqeri"]'));
   $('#cxratyava').append($('img[alt="cxratyava"]'));
   $('.green_box').removeClass('animated bounce');
   $('.green_box').css('background', '');
   $('.yellow_box').removeClass('animated bounce');
   $('.yellow_box').css('background', '');
   $('#check').removeClass('disabled');
}