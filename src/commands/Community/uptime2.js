const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");
const crypto = require('crypto');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uptime2')
    .setDescription('Discord Coding Lounge | What is the Bots Uptime?'),
    async execute(interaction, client, args) {

        // const ToTalSeconds = (client.uptime / 1000);
       //  const Days = Math.floor(ToTalSeconds / 86400);
        // const Hours = Math.floor(ToTalSeconds / 3600);
   //      const Minutes = Math.floor(ToTalSeconds / 60);
   //   const Seconds = Math.floor(ToTalSeconds % 60);


   let milliseconds = parseInt((client.uptime % 1000) / 100),
   seconds = parseInt((client.uptime / 1000) % 60),
   minutes = parseInt((client.uptime / (1000 * 60)) % 60),
   hours = parseInt((client.uptime / (1000 * 60 * 60)) % 1000);
   days = parseInt((client.uptime / 86400));

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
days = days < 10 ? '0' + days : days;

const id = crypto.randomBytes(90).toString('hex').slice(89, 99);


    const embed = new MessageEmbed()
    .setDescription( "Days: **" + days + "** Hours: **" + hours + "** Minutes: **" + minutes + '**')
    .setColor("BLUE")
    .setFooter(`ID: ${id} | Discord Coding Lounge - Bot Uptime`).setTimestamp()
  interaction.reply({ embeds: [embed] }).catch(err => {console.log("Error - Uptime Command")});
  // Requested By: ${interaction.user.username}
    }
  }