$(document).ready(function(){
  $('.chat').scrollTop($('.chat').prop("scrollHeight"));
});

$(function() {
  $('#new_chat_message').on('ajax:beforeSend', function() {
    message = $(this).find('input[type="text"]').val()
    if ( message.trim().length == 0) {
      return false;
    }
  });
});

$(function() {
  $('#new_chat_message').on('ajax:success', clearChatInput);
});

function clearChatInput() {
  $(this).find('input[type="text"]').val('');
}
