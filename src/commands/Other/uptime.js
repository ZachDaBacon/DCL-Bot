const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Discord Coding Lounge | What is the Bots Uptime?'),
    async execute(interaction, client, args) {

      const ToTalSeconds = (client.uptime / 1000);
      const Days = Math.floor(ToTalSeconds / 86400);
      const Hours = Math.floor(ToTalSeconds / 3600);
      const Minutes = Math.floor(ToTalSeconds / 60);
   //   const Seconds = Math.floor(ToTalSeconds % 60);


    const hugEmbed = new MessageEmbed()
    .setDescription(`Last Restart: **${Days}** Days, **${Hours}** Hours, **${Minutes}** Minutes ago.`)
    .setColor("BLUE")
    .setFooter(`Requested By: ${interaction.user.username} | Discord Coding Lounge - Bot Uptime`).setTimestamp()
  interaction.reply({ embeds: [hugEmbed] }).catch(err => {console.log("Error - Uptime Command")});
    }
  }