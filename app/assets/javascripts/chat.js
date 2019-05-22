$(function() {
  $('#new_chat_message').on('ajax:success', clearChatInput);
});

function clearChatInput() {
  $(this).find('input[type="text"]').val('');
}

// $(document).ready(function(){
//   $('#new_chat_message').on('ajax:success', function(e, data, status, xhr){
//     alert("donez")
//     console.log("ajax done");
//     console.log(e);
//     console.log(data);
//     console.log(status);
//     console.log(xhr);
//   });
// });

$('#new_chat_message').ajaxSuccess(function( event, xhr ) {
  console.log(xhr.responseText);
});
