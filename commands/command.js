module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, MessageEmbed) {
        const newEmbed = new MessageEmbed()
        .setColor('#384281')
        .setTitle('Zasady')
        .setDescription('Ogolne')
        .addFields(
            {name: 'Zasada 1', value: "abc"},
            {name: 'Zasada 2', value: "abc"},
            {name: 'Zasada 3', value: "abc"},
        )
        .setFooter('abc')

        message.channel.send({ embeds: [newEmbed] });
    }
}