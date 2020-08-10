import { MessageEmbed, Message } from 'discord.js';


export const command = async(arg: string, embed: MessageEmbed, message: Message) => {
    const mention = message.mentions.users.first();
    embed
    .addField('Support', `Hey ${mention ? mention!.username : message.author.username}, for help and any suggestions please raise an issue on our GitHub Community`)
    .addField('Support Issue Repo Link', 'https://github.com/EddieJaoudeCommunity/support/issues');

    return embed;
};

export const description = 'Get Support information';

export const triggers = ['support'];

export const usage = `${triggers[0]} or ${triggers[0]} <@user>`
