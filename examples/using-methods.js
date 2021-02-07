const { SoccerCoinAPI } = require('soccer-coin-api');

const soccercoin = new SoccerCoinAPI({
    key: 'ВАШ КЛЮЧ ДОСТУПА'
});

async function run() {

    const score = await soccercoin.api.getScore(); /* Получаем счета */
    const scoreById = await soccercoin.api.getScoreById([1]); /* Получаем счёт Дурова */

    const history = await soccercoin.api.getHistory(); /* Получаем переводы */
    const send = await soccercoin.api.sendPayment(1, 1000); /* Отправляем Дурову 1 коин */

    const lastPayment = await soccercoin.utils.getLastPayment(); /* Получаем последний перевод */

    console.log({
        score,
        scoreById,
        history,
        send,
        lastPayment
    });
}

run().catch(console.error);