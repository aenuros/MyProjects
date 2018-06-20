$(document).ready(function(){

  $("#new-message-button").click(function() {
     $.fn.sendMessage("user","Karen");
  });

  $("textarea").keydown(function(event) {
    if(event.keyCode==13) {
    let username=$("#new-message-body").val();
    $.fn.computerMessage(`Your name is ${username}`);
  }
  });


  $.fn.sendMessage = function(sender,username) {
    let message=$("#new-message-body").val();
    $("#conversation").append(`<p class="${sender}">${username}: ${message}</p>`);
    $("#new-message-body").val('');
    }

  $("#new-message-body").keydown(function(event) {
    if(event.keyCode==13) {
      $.fn.sendMessage("user","Karen");
      }
    });

  $.fn.computerMessage = function(message) {
    $("#conversation").append(`<p class="computer">${message}</p>`);
    }

  $.fn.computerMessage("Welcome to BIG MAMA! What is your name?");





});

/*
function (e) {
  if (13 == e.keyCode) {
     $.fn.computerMessage("You pressed enter.");
  }
}
*/
