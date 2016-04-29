var Botkit = require('botkit');
var builder = require('botbuilder');

var controller = Botkit.slackbot({debug: false});

var bot = controller.spawn({
  token: 'xoxb-38628238758-ypaqFFvip3ObiT6GdqVukOQR',
}).startRTM()

controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});

var slackBot = new builder.SlackBot(controller, bot);
slackBot.add('/', function (session) {
   session.send('Hello World'); 
});

slackBot.listenForMentions();

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});