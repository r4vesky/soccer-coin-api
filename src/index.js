const ParameterError = require('./errors/ParameterError');

/* Импорт классов */
const Utils = require('./classes/Utils');
const APIMethods = require('./classes/APIMethods');

class SoccerCoinAPI {

    /**
     * @param {Object} params - Параметры
     * @param {String} params.key - Ключ доступа к API
     * @param {String} params.customServer - Пользовательский API сервер
     */

    constructor(params) {
        if (!params.key) throw new ParameterError('Параметр key не указан');

        this.key = params.key;
        this.server = params.customServer ? params.customServer : 'https://soccercoin.ru/api';

        this.api = new APIMethods(params);
        this.utils = new Utils(params);
    }

}

module.exports = { SoccerCoinAPI };