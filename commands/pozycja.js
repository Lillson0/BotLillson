module.exports = {
    name: 'pozycja',
    description: 'Pozycja League of Legends', //comma :)
    execute: async(message, args, Client) => {
        const channel = '890593631365398560';
        const Top = message.guild.roles.cache.find(role => role.name === "Top");
        const Jungle = message.guild.roles.cache.find(role => role.name === "Jungle");
        const Mid = message.guild.roles.cache.find(role => role.name === "Mid");
        const Adc = message.guild.roles.cache.find(role => role.name === "Adc");
        const Supp = message.guild.roles.cache.find(role => role.name === "Supp");

        const topEmoji = message.guild.emojis.cache.find(e => e.name === 'top_icon');
        const jungleEmoji = message.guild.emojis.cache.find(e => e.name === 'jungle_icon');
        const midEmoji = message.guild.emojis.cache.find(e => e.name === 'mid_icon');
        const adcEmoji = message.guild.emojis.cache.find(e => e.name === 'adc_icon');
        const suppEmoji = message.guild.emojis.cache.find(e => e.name === 'supp_icon');

        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Wybierz odpowiednią role!')
            .setDescription('Wybierasz pozycje klikając na jedną z podanych emotek\n\n'
                + `${topEmoji} Top Laner\n`
                + `${jungleEmoji} Jungler\n`
                + `${midEmoji} Mid Laner\n`
                + `${adcEmoji} AD Carry\n`
                + `${suppEmoji} Support`);

        let MessageEmbed = await message.channel.send(embed);
        messageEmbed.react(topEmoji);
        messageEmbed.react(jungleEmoji);
        messageEmbed.react(midEmoji);
        messageEmbed.react(adcEmoji);
        messageEmbed.react(suppEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === topEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Top)
                }
                if (reaction.emoji.name === jungleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Jungle)
                }
                if (reaction.emoji.name === midEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Mid)
                }
                if (reaction.emoji.name === adcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Adc)
                }
                if (reaction.emoji.name === suppEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Supp)
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === topEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Top)
                }
                if (reaction.emoji.name === jungleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Jungle)
                }
                if (reaction.emoji.name === midEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Mid)
                }
                if (reaction.emoji.name === adcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Adc)
                }
                if (reaction.emoji.name === suppEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Supp)
                }
            } else {
                return;
            }
        });
    }
}