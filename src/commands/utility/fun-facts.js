import { SlashCommandBuilder } from "discord.js";
import { getFacts } from "../../database/mongodb.js";

export default {
  data: new SlashCommandBuilder()
    .setName("fun-fact")
    .setDescription("Returns a random fun fact about the dev"),
  async execute(interaction) {
    const facts = await getFacts();
    console.log("Facts: ", facts)

    if(facts.length === 0){
        await interaction.reply("No fun fact for now")
        return
    }

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    console.log("Random Fact: ", randomFact);

    try{
        await interaction.reply(randomFact.fact)
    } catch (error) {
        console.error(error)
        await interaction.reply("Error fetching fact")
        return
    }
  },
};
