import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("start-dm")
    .setDescription("Noble bot can send you dm."),
  async execute(interaction) {
    try{
        await interaction.user.send("Hello, I am Noble Bot!")

        await interaction.reply({
            content: "I've sent you a dm, check your messages",
            ephemeral: true,
        });
    } catch(error){
        await interaction.reply({
            content: "I couldn't send you a dm, check your privacy settings!",
            ephemeral: true
        })
        console.log(error)
    }
  },
};
