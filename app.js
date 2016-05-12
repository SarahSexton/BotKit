var Botkit = require('botkit');
var builder = require('botbuilder');

var controller = Botkit.slackbot({ debug: false });

var Wunderground = require('wundergroundnode');
var myKey = '4d4516107fb8cea7';
var wunderground = new Wunderground(myKey);


var bot = controller.spawn({
  token: 'xoxb-38628238758-ypaqFFvip3ObiT6GdqVukOQR',
}).startRTM()

controller.hears('weather', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
  wunderground.conditions().request('60613', function (err, response) {
    console.log(response);
    bot.reply(message, 'The temperature is ' + response.current_observation.temp_f + ' degrees F.');
  });

controller.hears('thank', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {

    bot.reply(message, 'I live to serve.');
});
});

//var slackBot = new builder.SlackBot(controller, bot);
//slackBot.add('/', function (session) {
//  session.send('Hello World');
//});

//slackBot.listenForMentions();