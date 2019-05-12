$(function() {
  $('#new_chat_message').on('ajax:success', clearChatInput);
});

function clearChatInput() {
  $(this).find('input[type="text"]').val('');
}
