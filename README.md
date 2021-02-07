# soccer-coin-api

![](https://img.shields.io/npm/dw/soccer-coin-api)

- [Примеры](https://github.com/r4vesky/soccer-coin-api/tree/master/examples "Примеры")

## Начало работы
Для начала использования, вам нужно создать в своей папке исполняемый файл, пусть это будет index.js

Теперь его нужно открыть и импортировать библиотеку:

```javascript
const { SoccerCoinAPI } = require('soccer-coin-api');

const soccercoin = new SoccerCoinAPI({
    key: 'ВАШ КЛЮЧ ДОСТУПА'
});
```
| Параметр  | Тип  | Описание |
| :------------ |:---------------:| -----|
| params      | Object | Параметры |
| params.key      | String        |   Ключ доступа к API |
| params.customServer | String        |    Пользовательский сервер API |

О получении ключа доступа написано в [этой статье](https://soccercoin.docs.apiary.io "этой статье ").

## Методы

### call
Вызов метода API по названию. Например, в API SoccerCoin вышел новый метод, но его нет в библиотеке. Например: getProfile. Вызвать этот метод можно так:

```javascript
async function getUserProfile() {
    const response = await soccercoin.api.call('getProfile', {});
    console.log(response);
}   

getUserProfile().catch(console.error);
```
| Параметр  | Тип  | Описание |
| :------------ |:---------------:| -----|
| method      | String        |  Метод |
| params | Object        |    Параметры |

### getScore
Получение медалей и коинов пользователя.

```javascript
async function run() {
    const response = await soccercoin.api.getScore();
    console.log(response); /* { coins: 0.001, medals: 1 } */
}   

run().catch(console.error);
```
Данный метод не имеет параметров.

### getScoreById
Получение  коинов других пользователей.

```javascript
async function run() {
    const response = await soccercoin.api.getScoreById([1, 500]);
    console.log(response); /* [{ user_id: 1, coins: 0.001 }, { user_id: 500, coins: 0.001 }] */
}   

run().catch(console.error);
```
| Параметр  | Тип  | Описание |
| :------------ |:---------------:| -----|
| user_ids      | Array        |  Массив с ID пользователей |

### sendPayment
Перевод коинов другому пользователю.

```javascript
async function run() {
    const response = await soccercoin.api.sendPayment(1, 1000);
    console.log(response);
}   

run().catch(console.error);
```
| Параметр  | Тип  | Описание |
| :------------ |:---------------:| -----|
| user_id      | Number        |  ID пользователя |
| amount      | Number        |  Количество коинов (в тысячных долях) |

### getHistory
Получение переводов пользователя.

```javascript
async function run() {
    const response = await soccercoin.api.getHistory(100, 0);
    console.log(response);
}   

run().catch(console.error);
```
| Параметр  | Тип  | Описание |
| :------------ |:---------------:| -----|
| limit      | Number        | Количество переводов, которое нужно получить |
| offset      | Number        | Количество переводов, которое нужно пропустить |

## Полезные методы

### getLastPayment
Получение последнего перевода.

```javascript
async function run() {
    const response = await soccercoin.utils.getLastPayment();
    console.log(response);
}   

run().catch(console.error);
```

Данный метод не имеет параметров.