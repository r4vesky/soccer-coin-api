const axios = require('axios');
const APIError = require('./errors/APIError');

module.exports = async (hostname, key, method, params) => {
    return new Promise(resolve => {
        axios.post(`${hostname}/${method}`, params, { headers: { 'Authorization': `User ${key}` } }).then(response => {
            if (response.data.error) return resolve(new APIError(response.data.error.message)); 
            resolve(response.data.response);
        })
        .catch(response => {
            return resolve(new APIError(response.response.data.error.message)); 
        });
    });
};