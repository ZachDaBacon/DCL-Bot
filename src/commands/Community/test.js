const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('check')
    .setDescription('Check the Bot is Working with Commands'),
    async execute(interaction, client) {
        await interaction.reply({ content: `<a:Success:999006584862675025> The bot is working, you can do other commands. Run /help for more information.`, ephemeral: true}).catch(err => {interaction.reply('Error')})
    },
}