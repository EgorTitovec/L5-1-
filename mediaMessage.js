import { Message } from './message.js';

export class MediaMessage extends Message {
    #fileUrl;

    constructor(sender, text, timestamp, fileUrl) {
        super(sender, text, timestamp);
        this.#fileUrl = fileUrl;
    }

    get fileUrl() {
        return this.#fileUrl;
    }

    set fileUrl(value) {
        this.#fileUrl = value;
    }

    show() {
        console.log(`[${this.timestamp}] ${this.sender}: ${this.text} (Файл: ${this.#fileUrl})`);
    }

    delete() {
        for (let key of Object.getOwnPropertyNames(this)) {
            delete this[key];
        }
        Object.setPrototypeOf(this, null);
        console.log("Экземпляр медиа-сообщения полностью удален.");
    }

    copy() {
        return Object.assign(new MediaMessage('', '', '', ''), this);
    }

    static clone(instance) {
        return new MediaMessage(instance.sender, instance.text, instance.timestamp, instance.fileUrl);
    }
}