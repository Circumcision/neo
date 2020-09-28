//Made by Cicumcision


const Discord = require('discord.js');
var roblox = require('roblox-js');

var request = require('request');
const prefix = "^";

const game = "^help | Yes"

var botVersion = "v1.0.2. Updated 1:54 AM, 4/1/18 EST"

var abs = ["K+"," M+"," B+"," T+"," Qd+"," Qn+"," Sx+"];

function shortenNumber(num){
    if(typeof num == "string"){
        if(num == "∞" || num == "infinity"){
            return "you can't shorten infinity LOL"
        }else{
            return "Unable to shorten."
        }
    }else{
        if(num < 1000){
            return num;
        }else if(num >= 1000 & num < 10000){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[0]);
        }else if(num >= 10000 & num < 100000){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[0]);
        }else if(num >= 100000 & num < 1000000){
            return(num.toString().substring(0,3) + "." + num.toString().substring(3,5) + abs[0]);
        }else if(num >= 1000000 & num < 10000000){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[1]);
        }else if(num >= 10000000 & num < 100000000){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[1]);
        }else if(num >= 100000000 & num < 1000000000){
            return(num.toString().substring(0,3) + "." + num.toString().substring(3,5) + abs[1]);
        }else if(num >= 1000000000 & num < 10000000000){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[2]);
        }else if(num >= 10000000000 & num < 100000000000){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[2]);
        }else if(num >= 100000000000 & num < 1e12){
            return(num.toString().substring(0,3) + "." + num.toString().substring(3,5) + abs[2]);
        }else if(num >= 1e12 & num < 1e13){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[3]);
        }else if(num >= 1e13 & num < 1e14){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[3]);
        }else if(num >= 1e14 & num < 1e15){
            return(num.toString().substring(0,3) + "." + num.toString().substring(3,5) + abs[3]);
        }else if(num >= 1e15 & num < 1e16){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[4]);
        }else if(num >= 1e16 & num < 1e17){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[4]);
        }else if(num >= 1e17 & num < 1e18){
            return(num.toString().substring(0,3) + "." + num.toString().substring(3,5) + abs[4]);
        }else if(num >= 1e18 & num < 1e19){
            return(num.toString().substring(0,1) + "." + num.toString().substring(1,3) + abs[5]);
        }else if(num >= 1e19 & num < 1e20){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[5]);
        }else if(num >= 1e20 & num < 1e21){
            return(num.toString().substring(0,2) + "." + num.toString().substring(2,4) + abs[5]);
        }else{
            return "Unable to shorten."
        }
    }
}

console.log(shortenNumber(100000000000));

const bot = new Discord.Client();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const botInfo = "";

bot.on('ready', () => {
    console.log("NeoBot Running!")
    bot.user.setStatus("Online");
    bot.user.setGame(game);
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const prefixes = ["K+","M+","B+"];

bot.on('message', function(message){
    if(message.author.equals(bot.user)) return;
    var loggingFile = "./logs.txt"
    const fs = require('fs');
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    console.log(message.author.username + ": " + message.content);
    switch(args[0].toLowerCase()){

        case "help":
            var embed = new Discord.RichEmbed;
            embed.setColor(3447003);
            embed.setTitle(":tada: Fun & Other Commands :tada:");
            embed.addField("^shorten (number)","returns a shortened version of that number");
            var moderation = new Discord.RichEmbed;
            moderation.setColor(3447003);
            moderation.setTitle(":gear: Moderation :gear:");
            moderation.addField("^kick","Kicks the user from this discord server");
            moderation.addField("^ban","Bans the user from this discord server");
            moderation.addField("^banrbx","Bans the user from the game");
            moderation.addField("^unbanrbx","Unbans the user from the game");

            message.channel.sendEmbed(embed);
            message.channel.sendEmbed(moderation);

            var gamecommands = new Discord.RichEmbed();
            gamecommands.setTitle(":space_invader: Game Commands :space_invader:");
            gamecommands.addField("^getstats","Returns the stats of a player if they have played the game after bot was made.");
            gamecommands.setColor("f49e42");
            message.channel.sendEmbed(gamecommands);
            break;
        case "shorten":
            if(args[1]){
                message.channel.sendMessage(shortenNumber(parseInt(args[1])));
            
            }else{
                message.channel.sendMessage("I don't have a number to shorten!");
            }
            break;
        case "kick":
            let role = message.member.hasPermission('KICK_MEMBERS');
            if(!role)
                return message.reply("You don't have permission to use this command! :x:")
            let member = message.mentions.members.first();
            if(!member)
              return message.reply("Please mention a valid member of this server");
            if(!member.kickable) 
              return message.reply("I cannot kick this member, they must have a higher role or i don't have kick permissions.");
            let reason = args.slice(2).join(' ');
            if(!reason)
            return message.reply("Please indicate a reason for the kick!");
            member.sendMessage(`**You have been kicked from ${message.guild.name}. Reason: ${reason}**`)
            member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            break;
        case "ban":
            let p = message.member.hasPermission('BAN_MEMBERS');
            if(!p)
                return message.reply("You don't have permission to use this command! :x:");
            let toban = message.mentions.members.first();
            let res = args.slice(2).join(' ');
            if(!toban)
                return message.reply("Please mention a valid member of this server");
            if(!res)
                return message.reply("Please indicate a reason for this ban!")
            toban.sendMessage(`**You have been banned from ${message.guild.name}. Reason: ${res}**`);
            toban.ban(res)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
            break;
        case "banrbx":
            let pe = message.member.hasPermission('BAN_MEMBERS');
            if(!pe)
                return message.reply("You don't have permission to use this command! :x:");
            if(args[1]){
                request('http://rbx123.altervista.org/NeoGames/banUser.php?username=' + args[1], function(error, response, body){

                });
                message.channel.sendMessage("**Banned user __" + args[1] + "__ frm Neo-Clicker**");
                bot.channels.get('464676133401788426').sendMessage("**User " + args[1] + " banned.**");
            }else{
                return message.reply("Please include a username to ban!");
            }
            break;
        case "unbanrbx":
            let pee = message.member.hasPermission('BAN_MEMBERS');
            if(!pee)
                return message.reply("You don't have permission to use this command! :x:");
            if(args[1]){
                request('http://rbx123.altervista.org/NeoGames/unbanUser.php?username=' + args[1], function(error, response, body){

                });
                message.channel.sendMessage("**Unbanned user __" + args[1] + "__ from Neo-Clicker**");
                bot.channels.get('464676133401788426').sendMessage("**User " + args[1] + " unbanned.**");
            }else{
                return message.reply("Please include a username to ban!");
            }
            break;
        case "getstats":
            if(args[1]){
                var allStats;
                var userid;
                roblox.getIdFromUsername(args[1]).then(function(uid){
                    userid = uid;
                });
                if(args[1] !== "all"){
                    request('http://rbx123.altervista.org/NeoGames/getStats.php',function(error,response,body){
                        try{
                            allStats = JSON.parse(body);
                            for(var i = 0; i < body.length; i++){
                                if(allStats[i].Username == args[1]){
                                    console.log("found");
                                    var embed2 = new Discord.RichEmbed();
                                    embed2.setTitle("Stats for " + args[1]);
                                    embed2.addField("RAP",allStats[i].AveragePrice);
                                    embed2.addField("NEO-BUX",allStats[i].NeoBux);
                                    embed2.addField("LEVEL",allStats[i].LVL);
                                    embed2.addField("CASES",allStats[i].Cases);
                                    embed2.addField("REBIRTHS",allStats[i].Rebirths);
                                    embed2.addField("TOTAL ITEMS",allStats[i].TotalItems);
                                    embed2.setThumbnail("https://www.roblox.com/bust-thumbnail/image?userId=" + userid + "&width=420&height=420&format=png");
                                    embed2.setColor("c8f442");
                                    message.channel.sendEmbed(embed2);
                                    break;
                                }
                            }
                        }catch(err){
                            message.channel.sendMessage("Error while getting stats; either the person hasn't joined (after bot made) or username incorrect.");
                        }
                    });
                }else if(args[1] == "all"){
                    var allStats2
                    var uid2
                    request('http://rbx123.altervista.org/NeoGames/getStats.php',function(error,response,body){
                        try{
                            allStats2 = JSON.parse(body);
                            for(var i = 0; i < body.length; i++){
                                if(allStats2[i].Username){
                                    console.log("found");
                                    var embed22 = new Discord.RichEmbed();
                                    roblox.getIdFromUsername(allStats2[i].Username).then(function(uid){
                                        uid2 = uid;
                                    });
                                    embed22.setTitle("Stats for " + args[1]);
                                    embed22.addField("RAP",allStats2[i].AveragePrice);
                                    embed22.addField("NEO-BUX",allStats2[i].NeoBux);
                                    embed22.addField("LEVEL",allStats2[i].LVL);
                                    embed22.addField("CASES",allStats2[i].Cases);
                                    embed22.addField("REBIRTHS",allStats2[i].Rebirths);
                                    embed22.addField("TOTAL ITEMS",allStats2[i].TotalItems);
                                    embed22.setThumbnail("https://www.roblox.com/bust-thumbnail/image?userId=" + uid2 + "&width=420&height=420&format=png");
                                    embed22.setColor("c8f442");
                                    message.author.sendEmbed(embed22);
                                    break;
                                }
                            }
                        }catch(err){
                            message.channel.sendMessage("Error while getting stats; either the person hasn't joined (after bot made) or username incorrect.");
                        }
                    });
                }
            }else{
                return message.reply("Please include a username to check stats of!");
            }
            break;
        }
});

bot.login('token');
