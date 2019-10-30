var loc = window.location
    var formData = $("#formData");
    var msgInput = $("#chatSend");
    let getTag = document.getElementById("chat_fullscreen");
    // var wsStart = 'ws://'

    // if (loc.protocol == 'https:'){
    //   wsStart = 'wss://'
    // }
    
    // var endpoint = wsStart + loc.host + loc.pathname;
    // var socket = new WebSocket(endpoint);
  
    
    // bot message UI
    function sendMessageFromBot(res) {
      let div = document.createElement('div');
      $(div).addClass('chat_msg_item chat_msg_item_admin')
      $(div).append('<div class="chat_avatar"><img src="../img/icons/bot.png" alt="My image"></div>');

      let text = document.createElement('span');
      let img = document.createElement('img');
      let btn = document.createElement('button');

      $(text).addClass('chat_msg_item-text');
      $(text).text('')
    

      res.forEach(w => {
        console.log(w);

         if(w.type == 0){
          $(text).append(" " + w.text);
          $(div).append(text)

         } else if(w.type == 1){
          $(img).attr('src', w.url);
          $(img).attr('style', 'width: 100%');

          $(div).append(img)


         } else if(w.type == 6){
          $(text).append(" " + w.text);
          $(div).append(text)
          var btndiv = document.createElement('div');

          btndiv.classList.add('chat_msg_item-buttons')

          w.replies.forEach(w => {
          var btn = document.createElement('button');

          btn.innerText = w.title;

          btndiv.appendChild(btn)

          })

          $(div).append(btndiv);
         }
         $(getTag).scrollTop($(getTag)[0].scrollHeight)
        })
        
        $(div).appendTo(getTag)
        $(getTag).scrollTop($(getTag)[0].scrollHeight)
        
    }


    // user message ui 
    function sendMessageFromUser(text){
      // check if value is ""
      $('#sendMessage').attr('disabled',true);
        $('#chatSend').keyup(function(){
            if($(this).val().length !== 0){
                $('#sendMessage').attr('disabled', false);
            } else {
                $('#sendMessage').attr('disabled', true);        
            }
        })
        
        let div = document.createElement('div'); 
        let span = document.createElement('span');

        $(div).addClass('chat_msg_item chat_msg_item_user');
        $(span).addClass('chat_msg_item-text');
        $(span).append(text)
        $(div).append(span);
        getTag.append(div);

        $(getTag).scrollTop($(getTag)[0].scrollHeight)
    }


    $(document).on("click", ".chat_msg_item-buttons button", function(e) {
        var btnText = e.target.innerText;
          
        $.ajax({
            type: "POST",
            url: 'https://e4082a31.ngrok.io/WCAPI',
            data: JSON.stringify({  "message" : btnText  }),
            success: function(result) {
            let res = JSON.parse(result);

            sendMessageFromBot(res)
            },
            dataType: 'json',
            contentType: 'application/json'
        })

        sendMessageFromUser(btnText)

        formData[0].reset()

        $(getTag).scrollTop($(getTag)[0].scrollHeight)
    });


    function sendMessage(e){
        e.preventDefault();

        let msgText = msgInput.val();

        sendMessageFromUser(msgText);
    
        $.ajax({
            type: "POST",
            url: 'https://e4082a31.ngrok.io/WCAPI',
            data: JSON.stringify({  "message" : msgText  }),
            success: function(result) {
            let res = JSON.parse(result);

            console.log(res);

            sendMessageFromBot(res)
            },
            dataType: 'json',
            contentType: 'application/json'
        })

        formData[0].reset()

        $(getTag).scrollTop($(getTag)[0].scrollHeight)
    }



    $("#sendMessage").click(function(e) {
        sendMessage(e)
    })
