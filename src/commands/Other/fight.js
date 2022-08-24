const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");
const fight = require('discord-fight-game');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('fight')
    .setDescription('Discord Coding Lounge | Fight Game')
    .addUserOption(option => option.setName('user').setDescription('Who to play with?').setRequired(true)),
    async execute(interaction, client, args) {

      const game = new fight(client, {
        oneEmoji: "🤺",
        oneName: "Sword",
        twoEmoji: "🏹",
        twoName: "Bow",
        threeEmoji: "🛡",
        threeName: "Shield",
        endEmoji: "🏃‍♂️",
        endName: "run away",

        // Custom Messages
        startMessage: "The war has begun, get ready warriors! 🔫",
        midMessage: "The fighters chose their move, Current battle condition :",
        endMessage: "{winner} 👑 gloriously defeated {looser} 🤮",
        forceEndMessage: "{user} was scared so they ended the war",
        timeEndMessage: "{user} ran away from the war",

        // Custom Game LOgic
        startHealth: 69,
    });

    interaction.reply({ content: `The game is started` });

    const user = interaction.options.getUser("user");

    interaction.author = interaction.user;

    if (user && user.bot) return interaction.editReply({ content: "You can not play the game with bots" })

    if (!user) game.solo(interaction)
    else game.duo(interaction, user);
}
}