$(document).ready(function(){
  App.cable.subscriptions.create({ channel: "ChatChannel" },
    {
      received: function(data) {
        $('.chat').find('div:first').remove();
        $('.chat').append(data);
        $(".chat").animate({ scrollTop: $('.chat').prop("scrollHeight")}, 800);
      }
    }
  );
});
