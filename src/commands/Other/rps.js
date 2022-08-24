const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");
const rps = require('discord-rock-paper-scissor');
const game = new rps({
  readyMessage: "Lads choose your moves in DMs.",
  endTitle: "{winner} won the game!",
  endDescription: "{winner} is the winner 👑 \n {looser} is the looser 😂🤮",
});


module.exports = {
    data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('Discord Coding Lounge | Rock Paper Scissors')
    .addUserOption(option => option.setName('user').setDescription('Who to play with?').setRequired(true)),
    async execute(interaction, client, args) {

        interaction.reply({ content: `The game is started` });
        const user = interaction.options.getUser("user");

        if (user && user.bot) return interaction.editReply({ content: "You can not play the game with bots" })

        if (!user) game.solo(interaction, client)
        else game.duo(interaction, user);
    }
}
