const request = require('../request');
const ParameterError = require('../errors/ParameterError');

class Utils {

    constructor(params) {
        if (!params.key) throw new ParameterError('Параметр key не указан');

        this.key = params.key;
        this.server = params.customServer ? params.customServer : 'https://soccercoin.ru/api';
    }

    /**
     * @returns Возвращает последний перевод
     */

    async getLastPayment() {
        const response = await request(this.server, this.key, 'getHistory', { limit: 1 });
        return response[0];
    }

}

module.exports = Utils;