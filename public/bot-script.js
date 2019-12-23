var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to Oregon State University Service Desk'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can I help?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'What are your opening hours?',
        value: 'hours'
      },
      {
        text: 'Where are you located?',
        value: 'located'
      },
      {
        text: 'I need help',
        value: 'help'
      },

    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'Monday - Friday 8:00 am - 5:00 pm';
  }
  else if (res.value === "located") {
    message = '150 Milne Computer Center, 1800 SW Campus Way, Corvallis, OR 97331';
  }
  else if (res.value === "help") {
    message = 'Okay, I am Service Desk bot and I will help you out, just keep selecting the options that come up';
  }
  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'I need help with Duo',
        value: 'duo'
      },
      {
        text: 'I need help with internet connection?',
        value: 'connection'
      },
      {
        text: 'I need help with an application?',
        value: 'application'
      }

    ]

  });
}).then(function (res){
  if (res.value == 'duo'){
    return botui.action.button({
      action: [
        {
          text: 'I got a new phone',
          value: 'duo.newphone'
        },
        {
          text: 'I got a new phone number',
          value: 'duo.newphonenumber'
        }
      ]
    })
  } else if (res.value == 'connection'){
    return botui.action.button({
      action: [
        {
          text: 'Wifi is not working on my phone',
          value: "wifi.phone"
        },
        {
          text: 'My ethernet is not working in the dorm?',
          value: "dorm.ethernet"
        },
        {
          text: 'My ethernet is not working on a departmental machine',
          value: 'departmental.ethernet'
        }
      ]
    })
  }
}).then (function(res){
  var message;
  if (res.value == 'duo.newphone'){
    message = "Follow the steps in this article: https://oregonstate.teamdynamix.com/TDClient/1935/Portal/KB/ArticleDet?ID=69334"
  }
  if (res.value == 'duo.newphonenumber'){
    message = "You will need to get a bypass code from Service Desk by calling them at 541-737-8787./n Afer that you can use this article to replace your phone number: https://oregonstate.teamdynamix.com/TDClient/1935/Portal/KB/ArticleDet?ID=60763"
  }
  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
});
