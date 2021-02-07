const { VK } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const { SoccerCoinAPI } = require('soccer-coin-api');

const vk = new VK({
	token: 'ВАШ КЛЮЧ ДОСТУПА'
});

const soccercoin = new SoccerCoinAPI({
    key: 'ВАШ КЛЮЧ ДОСТУПА'
});

const hearManager = new HearManager();

vk.updates.on('message_new', hearManager.middleware);

vk.updates.on('message_new', async context => {

    /* Отправляем 0,001 коин пользователю */
    await soccercoin.api.sendPayment(context.senderId, 1);

    /* Отправляем сообщение */
    await context.send('Мы отправили вам 0,001 коин :3');

});

vk.updates.start().catch(console.error);