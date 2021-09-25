module.exports = {
    name: 'hello',
    description: "this is a youtube link!",
    execute(message, args, user){
        message.channel.send(`**Cześć** ${user}`);
    }
}