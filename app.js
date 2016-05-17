var Botkit = require('botkit');
var builder = require('botbuilder');
var controller = Botkit.slackbot({ debug: false });
var Wunderground = require('wundergroundnode');

var weatherKey = provess.env.WEATHER_KEY || "Missing weather API key"; 
var wunderground = new Wunderground(weatherKey);

var slackToken = provess.env.SLACK_TOKEN || "Missing Slack Token";

var bot = controller.spawn({
  token: provess.env.SLACK_TOKEN || "Missing Slack Token",
}).startRTM()

controller.hears('weather', ['direct_message', 'direct_mention', 'mention'], function (bot, message) 
{
  wunderground.conditions().request('60613', function (err, response) 
  {
    console.log(response);
    bot.reply(message, "It's *" + response.current_observation.weather + '* out right now, and'
    + ' the temperature is ' + response.current_observation.temp_f + ' degrees F. ' + 
    ' It feels like ' + response.current_observation.feelslike_f + ' F out there.');
  });
  controller.hears('thank', ['direct_message', 'direct_mention', 'mention'], function (bot, message) 
  {
    bot.reply(message, 'I live to serve.');
  });
    controller.hears('love', ['direct_message', 'direct_mention', 'mention'], function (bot, message) 
  {
    bot.reply(message, 'You have not yet taught this robot how to love.');
  });
});