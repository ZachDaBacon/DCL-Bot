const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("v14-embed")
        .setDescription("How to make an Embed, in discord.js v14.")
        .addUserOption(option => option.setName('target').setDescription('Who needs assistance with Discord.js v14 Embeds?').setRequired(true)),
        async execute(interaction, client) {

            const target = interaction.options.getUser('target');
            const targetMember = await interaction.guild.members.fetch(target.id);

            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription("Getting Target..")
            .setFooter('Discord Coding Lounge | Discord.js v14 Emebd')

            const embed2 = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("How To Make an Embed with v14")
            .setDescription("With v14, we no longer use the `MessageEmbed()` function, we now must use `EmbedBuilder()`. Below you can find an example.")
            .addField("```js\nconst { EmbedBuilder } = require('discord.js'); //  This must be at the top of your file, instead of using MessageEmbed (which was used in v13), you now must use emebd builders.\n\n        const embed = new EmbedBuilder() // \n        .setTitle(\"A Title\") // Your Title\n        .setDescription(`A Description`) // Your Description\n        .setFooter(\"A Footer\") // Your Footer\n        interaction.reply({ embeds: [embed] })\n    }```\n\n**You can find a full embed guide, here:** https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor")
            .setFooter('Discord Coding Lounge | Discord.js v14 Emebd')

            await interaction.reply({ embeds: [embed] })
            await interaction.editReply({ embeds: [embed2] })

}
};