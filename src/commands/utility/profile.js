import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Returns an overview about Basil Goodluck, Nobledev"),
  async execute(interaction) {
    await interaction.reply("Meet Basil, the full-stack virtuoso who codes with as much finesse as a finely tuned guitar solo! Specializing in React, Next.js, Node.js, Express.js, MongoDB, Firebase, and WordPress, Basil builds web experiences that are as smooth and dynamic as a perfectly executed chess strategy. When not architecting full-stack solutions, you’ll find Basil making strategic moves on the chessboard or jamming on the guitar, turning code and chords into pure harmony. Whether it's creating responsive apps or making a winning checkmate, Basil’s got the skills to play the game and play it well.");
  }
};
