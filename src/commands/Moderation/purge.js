const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message, Permissions } = require('discord.js');
const { execute } = require('./kick');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Purge an amount of messages within this channel') 
    // amount option 
    .addIntegerOption((option) => {
        return option
        .setName('amount') // the option name 
        .setDescription('amount of messages you wish to delete')
        .setRequired(true)
    }),
    async execute(interaction, client) {
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: "You don't have `MANAGE_MESSAGES` permission to use this command" }); // if they dont have the manage messasges perms

        if(!interaction.guild.me.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: "I don't have `MANAGE_MESSAGES` permission to use this command" }); // if i dont have the manage messages oerns

        let amount = interaction.options.getInteger('amount')

        const logChannel = `970775930236702790`

        const logChan = interaction.guild.channels.cache.get(logChannel)

        if(isNaN(amount))
        return interaction.reply({ content: '**Please specufy a valid amount beetween 1 - 100!*' })

        if(parseInt(amount) > 99) {
           return interaction.reply({ content: '**I can only delete 99 messages at once!**', ephemeral: true }) 
        } else {
            try {
            let { size } = await interaction.channel.bulkDelete(amount)

            const log = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`<a:Success:999006584862675025> Purge Done`)
            .addFields(
                { name: '**Amount:**', value: `${amount}` },
                { name: '**Channel:**', value: `${interaction.channel}` },
                { name: '**Purge Done By:**', value: `${interaction.user.tag}`, inline: true },
            )
            .setFooter("Discord Coding Lounge | Moderation Team")

            logChan.send({ embeds: [log] }).catch(err => {console.log('Error When Logging')})

            const embed = new MessageEmbed()
   .setColor("BLUE")
  .setDescription(`<a:Success:999006584862675025> ${interaction.user.username} Deleted **${amount}** messages.`)
  .setFooter(`Purge Done By: ${interaction.user.tag}`)
  await interaction.reply({ embeds: [embed]})  } catch(e) { // if error which is mostly because trying to delete older then 14 days
    console.log(e)
    interaction.reply({ content: `🚨 **ERROR** 🚨 I am not sure what this is, but it may be.. I cannot delete messages that are older than 14 days. (This is due to discord limitations)`, ephemeral: true})
}}
            }
        }

        // blakes fat + unloved