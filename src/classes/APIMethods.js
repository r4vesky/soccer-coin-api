const request = require('../request');
const ParameterError = require('../errors/ParameterError');

class APIMethods {

    constructor(params) {
        if (!params.key) throw new ParameterError('Параметр key не указан');

        this.key = params.key;
        this.server = params.customServer ? params.customServer : 'https://soccercoin.ru/api';
    }

    /**
     * @param {String} method - Метод API
     * @param {Object} params - Параметры
     * @returns Возвращает ответ сервера
     */
    async call(method, params) {
        const response = await request(this.server, this.key, method, params);
        return response;
    }

    /**
     * @returns Возвращает счета пользователя
     */
    async getScore() {
        const response = await request(this.server, this.key, 'getScore', {});
        return response;
    }

    /**
     * @param {Array} user_ids - Массив с ID пользователей
     * @returns Возвращает счета пользователя
     */
    async getScoreById(user_ids) {
        if (!user_ids) throw new ParameterError('Параметр user_ids не указан');

        const response = await request(this.server, this.key, 'getScoreById', { user_ids: user_ids });
        return response;
    }

    /**
     * @param {Number} to_id - ID получателя
     * @param {Number} amount - Сумма (в тысячных долях)
     * @returns Возвращает уникальный ID перевода
     */
    async sendPayment(to_id, amount) {
        if (!to_id) throw new ParameterError('Параметр to_id не указан');
        if (!amount) throw new ParameterError('Параметр amount не указан');

        const response = await request(this.server, this.key, 'sendPayment', { to_id: to_id, amount: amount });
        return response;
    }

    /**
     * @param {Number} limit - Количество переводов, которое нужно получить
     * @param {Number} offset - Количество переводов, которое нужно пропустить
     * @returns Возвращает переводы пользователя
     */
    async getHistory(limit, offset) {
        const response = await request(this.server, this.key, 'getHistory', { limit: limit, offset: offset });
        return response;
    }

}

module.exports = APIMethods;