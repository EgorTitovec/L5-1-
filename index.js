import { MediaMessage } from './mediaMessage.js';

const messages = [
    new MediaMessage("Алексей", "Смотри какая фотка!", "12:30", "photo.jpg"),
    new MediaMessage("Мария", "Голосовое сообщение", "12:32", "voice.ogg")
];

console.log("--- Вызов метода show() для сообщений ---");
messages[0].show();
messages[1].show();

const clonedMessage = MediaMessage.clone(messages[0]);
console.log("Сравнение оригинала и клона через ===:", messages[0] === clonedMessage); // false
console.log("Данные клонированного сообщения:");
clonedMessage.show();