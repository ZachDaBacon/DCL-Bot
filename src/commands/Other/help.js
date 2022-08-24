const { SlashCommandBuilder } = require('@discordjs/builders');
const paginationEmbed = require('discordjs-button-pagination');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help Area 📚"),
        async execute(interaction, client) {

            const embed1 = new MessageEmbed()
                .setColor("BLUE")
                .setTitle('<:BotDev:999006715892736120> General Commands')
                .setDescription(`All of <@987808396893892649>'s commands use Slash Commands (/). This will be the prefix for **any** commands (From This Bot).`)
                .addFields(
                    { name: '<:BotDev:999006715892736120> Coding Help', value: `[Coding Help #1](https://discord.com/channels/970775928596746290/980196278698901534) \n [Coding Help #2](https://discord.com/channels/970775928596746290/998708056634429560)` },
                    { name: '<:VS_Code:1000093216663679026> Share Your Code', value: `Wanting to Share some of your code to the community? You can do that [here](https://discord.com/channels/970775928596746290/998979201929592862)`, inline: true },
                    { name: '<:Chat_2:1000094452167225364> Have a Chat', value: `Come have a chat with us in general, find the channel [here](https://discord.com/channels/970775928596746290/970775929481744421)`, inline: true },
                )
                .setTimestamp()

const embed2 = new MessageEmbed()
.setColor("BLUE")
.setTitle('<:YouTube:999006654702035014> MrJAwesomes Videos')
.addField('Video Commands:', '`video1-start` Prefix | How to code a DISCORD BOT | v13 \n `video2-discloud` Hosting Your bot 24/7 For FREE! | Discloud \n `video3-membercount` Prefix | Member Count Command | v13 \n `video4-customstatus` Prefix | How to code a CUSTOM STATUS for your Bot | v13 \n `video5-embed` Complete EMBED Guide | v13 \n `video6-warn` Prefix | How to code a WARN Command | v13 \n `video7-ban-kick` Prefix | How to code a BAN & KICK Command | v13 \n `video8-purge-clear` Prefix | How to code a PURGE/CLEAR Command | v13 \n `video9-slashcommand` How to use the Slash Command Package | v13 \n `video10-steal` Prefix | How to code a Steal Emoji Command (Like CarlBot) | v13 \n `video11-welcome` How to code a Welcome Message (In Channel & DM) | v13 \n `video12-mute` How to code a Mute Command | v13 \n `video13-addtoserver`How to get ADD TO SERVER Button | Discord Dev Portal \n `video14-heroku` How to host your bot 24/7 for FREE | Heroku', false)
.setTimestamp()

const embed3 = new MessageEmbed()
.setColor("BLUE")
.setTitle('<:community:1002230820431470602> Community Commands')
.addField('Commands:', '`help` This Command \n `common` Common Mistakes When Coding, and How to Fix them. \n `hug [user]` Hug a user, aww how cute 💕 \n `codinghelp` Locked to Coding Helper+ \n `ping` My Ping \n `14handler` If you do want to use v14 slash commands, this is the handler for you! \n `14prefix` Using prefix commands on v14? Check out this.. \n `8ball [question]` Ask the 8ball a question.. \n `accountage` When did you make your account? \n `nick [nickname]` Change your nickname \n `poll [question]` Make a Poll | Locked to Moderator \n `check` Check the bot is working \n `membercount` How many people are in the Discord Coding Lounge discord? \n `v14-13` How to downgrade from djs v14 - 13 \n `v14-embed [target]` How to make an Embed, in discord.js v14 \n `toes` 🤫', false)
.setTimestamp()

const embed4 = new MessageEmbed()
.setColor("BLUE")
.setTitle('<:Moderator:998705121603113081> Moderation Commands')
.addField('Moderation Commands:', '`announce [title] [content]` Announce something | Only moderators can use this \n `ban [user] [reason]` Ban a user from the server | Only moderators can use this \n `kick [user] [reason]` Kick a user from the server | Only moderators can use this \n `clear [amount]` Purge a amount of messages | Only moderators can use this \n `warn [user] [reason]` Warn a user within the server | Only moderators can use this', false)
.setTimestamp()

const button1 = new MessageButton()
                .setCustomId('previousbtn')
                .setLabel('<<')
                .setStyle('DANGER');

const button2 = new MessageButton()
                .setCustomId('nextbtn')
                .setLabel('>>')
                .setStyle('SUCCESS');

// Create an array of embeds
pages = [
	embed1,
	embed2,
    embed3,
    embed4,
];

//create an array of buttons

buttonList = [
    button1,
    button2
]


// Call the paginationEmbed method, first three arguments are required
// timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
paginationEmbed(interaction, pages, buttonList);
// There you go, now you have paged embeds
       
    }
}