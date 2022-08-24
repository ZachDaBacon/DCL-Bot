const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('video')
    .setDescription('All of Jackson videos can be found here.')
    .addStringOption(option => 
    option.setName('video')
    .setDescription('What video does the user need to watch?')
    .setRequired(true)
    .addChoices(
      { name: '❓  How to code a DISCORD BOT | v13', value: 'Video_1' },
      { name: '❓  Hosting Your bot 24/7 For FREE! | DisCloud', value: 'Video_2' },
      { name: '❓  How to code a MEMBER COUNT Command | v13', value: 'Video_3' },
      { name: '❓  How to code a CUSTOM STATUS for your Bot | v13', value: 'Video_4' },
      { name: '❓  Complete EMBED Guide | v13', value: 'Video_5' },
      { name: '❓  How to code a WARN Command | v13', value: 'Video_6' },
      { name: '❓  How to code a BAN & KICK Command | v13', value: 'Video_7' },
      { name: '❓ How to code a PURGE/CLEAR Command | v13', value: 'Video_8' },
      { name: '❓ How to use the Slash Command Package | v13', value: 'Video_9' },
      { name: '❓ Steal Emoji Command | v13', value: 'Video_10' },
      { name: '❓ Welcome Message & DM | v13', value: 'Video_11' },
      { name: '❓ Mute Command | v13', value: 'Video_12' },
      { name: '❓ How to get ADD TO SERVER Button | v13', value: 'Video_13' },
      { name: '❓ How to host your bot 24/7 for FREE! | Heroku', value: 'Video_14' },
    ))
    .addUserOption(option => option.setName('target').setDescription('Who need to watch this video?').setRequired(true)),
    async execute(interaction, client, args) {

      let Video_1 = interaction.options.getString('video');
      if (!Video_1) reason = "Error - Video_1"

      let Video_2 = interaction.options.getString('video');
      if (!Video_2) reason = "Error - Video_2"

      let Video_3 = interaction.options.getString('video');
      if (!Video_3) reason = "Error - Video_3"

      let Video_4 = interaction.options.getString('video');
      if (!Video_4) reason = "Error - Video_4"

      let Video_5 = interaction.options.getString('video');
      if (!Video_5) reason = "Error - Video_5"

      let Video_6 = interaction.options.getString('video');
      if (!Video_6) reason = "Error - Video_6"

      let Video_7 = interaction.options.getString('video');
      if (!Video_6) reason = "Error - Video_7"

      let Video_8 = interaction.options.getString('video');
      if (!Video_8) reason = "Error - Video_8"

      let Video_9 = interaction.options.getString('video');
      if (!Video_9) reason = "Error - Video_9"

      let Video_10 = interaction.options.getString('video');
      if (!Video_10) reason = "Error - Video_10"

      let Video_11 = interaction.options.getString('video');
      if (!Video_11) reason = "Error - Video_11"

      let Video_12 = interaction.options.getString('video');
      if (!Video_12) reason = "Error - Video_12"

      let Video_13 = interaction.options.getString('video');
      if (!Video_13) reason = "Error - Video_13"

      let Video_14 = interaction.options.getString('video');
      if (!Video_14) reason = "Error - Video_14"

      const target = interaction.options.getUser('target');
      const targetMember = await interaction.guild.members.fetch(target.id);

if(Video_1){
  const video1 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a DISCORD BOT | v13](https://youtu.be/eMJfBzUAyEY)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video1] });
}

if(Video_2){
  const video2 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Hosting Your bot 24/7 For FREE! | Discloud](https://www.youtube.com/watch?v=wLxlYQiaD1I)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video2] });
}

if(Video_3){
  const video3 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a MEMBER COUNT Command | v13](https://www.youtube.com/watch?v=wK6CC2dz_6U)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video3] });
}

if(Video_4){
  const video4 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a CUSTOM STATUS for your Bot | v13](https://www.youtube.com/watch?v=4YqDVBr-Q5s)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video4] });
}

if(Video_5){
  const video5 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Complete EMBED Guide | v13](https://www.youtube.com/watch?v=L5CaI98WPo8&t=204s)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video5] });
}

if(Video_6){
  const video6 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a WARN Command | v13](https://www.youtube.com/watch?v=SwFNX44XIpE)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video6] });
}

if(Video_7){
  const video7 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a BAN & KICK Command | v13](https://www.youtube.com/watch?v=dgLPDbiwXzw)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video7] });
}

if(Video_8){
  const video8 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to code a PURGE/CLEAR Command | v13](https://www.youtube.com/watch?v=6fFaCvhLefA)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video8] });
}

if(Video_9){
  const video9 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to use the <#980962737926574083> | v13](https://www.youtube.com/watch?v=qceocw4kf7c)`)
 .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video9] });
}

if(Video_10){
  const video10 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Steal Emoji Command | v13](https://www.youtube.com/watch?v=M42J1SpVoTA&t=338s)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video10] });
}

if(Video_11){
  const video11 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Welcome Message & DM | v13](https://www.youtube.com/watch?v=ylc1L2FAy6Y&t=391s)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video11] });
}

if(Video_12){
  const video12 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Mute Command | v13](https://www.youtube.com/watch?v=Wt8CHOpL6QI)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video12] });
}

if(Video_13){
  const video13 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to get ADD TO SERVER Button | v13](https://www.youtube.com/watch?v=yH8GvVM5LB0&t=18s)`)
  .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video13] });
}

if(Video_14){
  const video14 = new MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[How to host your bot 24/7 for FREE | Heroku](https://www.youtube.com/watch?v=EY4T1vOVJDY&t=79s)`)
 .setTimestamp()
  .setFooter(`Discord Coding Lounge | Video Suggestion`)
return interaction.reply({ content: `${target}`, embeds: [video14] });
}
    }
  }